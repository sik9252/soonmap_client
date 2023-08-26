import React, { useState, useEffect, useMemo } from 'react';
import { SquareInput } from '../../components/Input';
import { Button } from '../../components/Button';
import { InputBox, Result, Domain, TimerSection } from './style';
import Timer from '../../utils/timer';
import { useFindIdEmailValidateRequest, useFindIdCertificateConfirmRequest } from '../../api/FindAccount';

function FindId() {
  const {
    mutate: findIdEmailValidateRequest,
    data: findIdEmailValidateRequestData,
    error: findIdEmailValidateRequestError,
    isLoading: findIdEmailValidateRequestLoading,
  } = useFindIdEmailValidateRequest();

  const {
    mutate: findIdCertificateConfirmRequest,
    data: findIdCertificateConfirmRequestData,
    error: findIdCertificateConfirmRequestError,
    isLoading: findIdCertificateConfirmRequestLoading,
  } = useFindIdCertificateConfirmRequest();

  const [userEmail, setUserEmail] = useState('');
  const [isEmailCheckSuccess, setIsEmailCheckSuccess] = useState(false);
  const [certificateNum, setCertificateNum] = useState('');
  const [isTimeUp, setTimeUp] = useState(false);

  const handleUserEmailInput = (e) => {
    setUserEmail(e.target.value);
  };

  const handleCertificateNumInput = (e) => {
    setCertificateNum(e.target.value);
  };

  const handleGetCertificateButton = () => {
    const data = {
      receiver: userEmail + '@sch.ac.kr',
    };

    if (!userEmail) {
      alert('이메일이 입력되지 않았습니다.');
    } else {
      findIdEmailValidateRequest({ ...data });
    }
  };

  useEffect(() => {
    if (findIdEmailValidateRequestData) {
      alert('이메일로 인증번호가 전송되었습니다.');
      setIsEmailCheckSuccess(true);
    } else if (findIdEmailValidateRequestError) {
      alert(findIdEmailValidateRequestError.message);
    }
  }, [findIdEmailValidateRequestData, findIdEmailValidateRequestError]);

  const handleCertificateButton = () => {
    const data = {
      code: certificateNum,
      receiver: userEmail + '@sch.ac.kr',
    };

    if (!certificateNum) {
      alert('인증번호가 입력되지 않았습니다.');
    } else {
      findIdCertificateConfirmRequest({ ...data });
    }
  };

  useEffect(() => {
    if (findIdCertificateConfirmRequestData) {
      alert('인증이 완료되었습니다.');
    } else if (findIdCertificateConfirmRequestError) {
      alert(findIdCertificateConfirmRequestError.message);
    }
  }, [findIdCertificateConfirmRequestData, findIdCertificateConfirmRequestError]);

  const timerComponent = useMemo(() => {
    return <Timer isStart={isEmailCheckSuccess} setTimeUp={setTimeUp} />;
  }, [isEmailCheckSuccess]);

  useEffect(() => {
    if (isTimeUp) {
      alert('인증번호가 만료되었습니다. 다시 받아주세요.');
      setIsEmailCheckSuccess(false);
    }

    setTimeout(() => {
      setTimeUp(false);
    }, 500);
  }, [isTimeUp]);

  return (
    <>
      {findIdCertificateConfirmRequestData ? (
        <Result>
          <div>아이디:</div>
          <div>{findIdCertificateConfirmRequestData.data.id}</div>
        </Result>
      ) : (
        <>
          <InputBox>
            <div>
              <SquareInput placeholder="가입하신 이메일을 입력해주세요. ex) abcd123" onChange={handleUserEmailInput} />
              <Domain>@sch.ac.kr</Domain>
            </div>
            <Button
              height={48}
              bgColor={'#4B7CC4'}
              onClick={() => handleGetCertificateButton()}
              disabled={findIdEmailValidateRequestLoading}
            >
              인증번호 받기
            </Button>
          </InputBox>
          {isEmailCheckSuccess ? (
            <InputBox>
              <div>
                <SquareInput placeholder="인증번호를 입력해주세요." onChange={handleCertificateNumInput} />
                <TimerSection>{timerComponent}</TimerSection>
              </div>
              <Button
                height={48}
                onClick={() => handleCertificateButton()}
                disabled={findIdCertificateConfirmRequestLoading}
              >
                인증하기
              </Button>
            </InputBox>
          ) : (
            ''
          )}
        </>
      )}
    </>
  );
}

export default FindId;
