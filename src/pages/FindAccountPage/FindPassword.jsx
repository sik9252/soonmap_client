import React, { useState, useMemo, useEffect } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import { SquareInput } from '../../components/Input';
import { Button } from '../../components/Button';
import { Box, Flex, FormControl, FormHelperText } from '@chakra-ui/react';
import { InputBox, Domain, TimerSection } from './style';
import Timer from '../../utils/timer';
import {
  useFindPasswordValidateRequest,
  useFindPasswordCertificateConfirmRequest,
  useChangePasswordRequest,
} from '../../api/FindAccount';

function FindPassword() {
  const navigate = useNavigate();

  const {
    mutate: findPasswordEmailValidateRequest,
    data: findPasswordEmailValidateRequestData,
    error: findPasswordEmailValidateRequestError,
    isLoading: findPasswordEmailValidateRequestLoading,
  } = useFindPasswordValidateRequest();

  const {
    mutate: findPasswordCertificateConfirmRequest,
    data: findPasswordCertificateConfirmRequestData,
    error: findPasswordCertificateConfirmRequestError,
    isLoading: findPasswordCertificateConfirmRequestLoading,
  } = useFindPasswordCertificateConfirmRequest();

  const {
    mutate: changePasswordRequest,
    data: changePasswordRequestData,
    error: changePasswordRequestError,
    isLoading: changePasswordRequestLoading,
  } = useChangePasswordRequest();

  const [userEmail, setUserEmail] = useState('');
  const [userId, setUserId] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [isEmailAndIdCheckSuccess, setIsEmailAndIdCheckSuccess] = useState(false);
  const [certificateNum, setCertificateNum] = useState('');
  const [isTimeUp, setTimeUp] = useState(false);
  const [confirmToken, setConfirmToken] = useState('');

  const handleUserEmailInput = (e) => {
    setUserEmail(e.target.value);
  };

  const handleUserIdInput = (e) => {
    setUserId(e.target.value);
  };

  const handleCertificateNumInput = (e) => {
    setCertificateNum(e.target.value);
  };

  const handleUserNewPasswordInput = (e) => {
    setNewPassword(e.target.value);
  };

  const handleUserNewPasswordConfirmInput = (e) => {
    setNewPasswordConfirm(e.target.value);
    if (newPassword !== e.target.value) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const handleGetCertificateButton = () => {
    const data = {
      receiver: userEmail + '@sch.ac.kr',
      id: userId,
    };

    if (!userEmail || !userId) {
      alert('올바른 이메일 주소 혹은 아이디를 입력해주세요.');
    } else {
      findPasswordEmailValidateRequest({ ...data });
    }
  };

  useEffect(() => {
    if (findPasswordEmailValidateRequestData) {
      alert('이메일로 인증번호가 전송되었습니다.');
      setIsEmailAndIdCheckSuccess(true);
    } else if (findPasswordEmailValidateRequestError) {
      alert(findPasswordEmailValidateRequestError.message);
    }
  }, [findPasswordEmailValidateRequestData, findPasswordEmailValidateRequestError]);

  const handleCertificateButton = () => {
    const data = {
      code: certificateNum,
      receiver: userEmail + '@sch.ac.kr',
    };

    if (!certificateNum) {
      alert('인증번호가 입력되지 않았습니다.');
    } else {
      findPasswordCertificateConfirmRequest({ ...data });
    }
  };

  useEffect(() => {
    if (findPasswordCertificateConfirmRequestData) {
      setConfirmToken(findPasswordCertificateConfirmRequestData.data.confirmToken);
      alert('인증이 완료되었습니다.');
    } else if (findPasswordCertificateConfirmRequestError) {
      alert(findPasswordCertificateConfirmRequestError.message);
    }
  }, [findPasswordCertificateConfirmRequestData, findPasswordCertificateConfirmRequestError]);

  const handleChangePasswordButton = () => {
    const data = {
      token: confirmToken,
      pw: newPassword,
    };

    if (!newPassword || !newPasswordConfirm) {
      alert('새 비밀번호가 입력되지 않았습니다.');
    } else {
      changePasswordRequest({ ...data });
    }
  };

  useEffect(() => {
    if (changePasswordRequestData) {
      alert('비밀번호 변경이 완료되었습니다. 로그인 페이지로 이동합니다.');
      navigate('/my');
    } else if (changePasswordRequestError) {
      alert(changePasswordRequestError.message);
    }
  }, [changePasswordRequestData, changePasswordRequestError]);

  const timerComponent = useMemo(() => {
    return <Timer isStart={isEmailAndIdCheckSuccess} setTimeUp={setTimeUp} />;
  }, [isEmailAndIdCheckSuccess]);

  useEffect(() => {
    if (isTimeUp) {
      alert('인증번호가 만료되었습니다. 다시 받아주세요.');
      setIsEmailAndIdCheckSuccess(false);
    }

    setTimeout(() => {
      setTimeUp(false);
    }, 500);
  }, [isTimeUp]);

  return (
    <>
      <InputBox>
        <div>
          <SquareInput placeholder="가입하신 이메일을 입력해주세요. ex) abcd123" onChange={handleUserEmailInput} />
          <Domain>@sch.ac.kr</Domain>
        </div>
        <SquareInput placeholder="가입하신 아이디를 입력해주세요." onChange={handleUserIdInput} />
        <Button
          height={48}
          bgColor={'#4B7CC4'}
          onClick={() => handleGetCertificateButton()}
          disabled={findPasswordEmailValidateRequestLoading}
        >
          인증번호 받기
        </Button>
      </InputBox>
      {isEmailAndIdCheckSuccess ? (
        <InputBox>
          <div>
            <SquareInput placeholder="인증번호를 입력해주세요." onChange={handleCertificateNumInput} />
            {findPasswordCertificateConfirmRequestData ? (
              <TimerSection>인증완료</TimerSection>
            ) : (
              <TimerSection>{timerComponent}</TimerSection>
            )}
          </div>
          <Button
            height={48}
            bgColor={'#4B7CC4'}
            onClick={() => handleCertificateButton()}
            disabled={findPasswordCertificateConfirmRequestLoading}
          >
            인증하기
          </Button>
        </InputBox>
      ) : (
        ''
      )}
      {findPasswordCertificateConfirmRequestData && isEmailAndIdCheckSuccess ? (
        <InputBox>
          <SquareInput
            type="password"
            placeholder="새로운 비밀번호를 입력해주세요."
            onChange={handleUserNewPasswordInput}
          />
          <SquareInput
            type="password"
            placeholder="새로운 비밀번호를 다시 입력해주세요."
            onChange={handleUserNewPasswordConfirmInput}
          />
          <FormControl>
            {passwordError ? <FormHelperText color="#dc143c">비밀번호가 일치하지 않습니다.</FormHelperText> : ''}
          </FormControl>
          <Button height={48} onClick={() => handleChangePasswordButton()} disabled={changePasswordRequestLoading}>
            비밀번호 변경하기
          </Button>
        </InputBox>
      ) : (
        ''
      )}
    </>
  );
}

export default FindPassword;
