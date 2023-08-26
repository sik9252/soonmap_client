import React, { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RegisterContainer, Notice, InputSection, OtherOptionSection, InputBox, Domain, TimerSection } from './style';
import Header from '../../components/Header';
import { SquareInput } from '../../components/Input';
import { Button } from '../../components/Button';
import Timer from '../../utils/timer';

import { useRegisterEmailValidateRequest, useRegisterCodeValidateRequest, useRegisterRequest } from '../../api/Account';

function RegisterPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValidate, setIsEmailValidate] = useState(false);
  const [isCertificated, setIsCertificated] = useState(false);
  const [isTimeUp, setTimeUp] = useState(false);
  const [registerToken, setRegisterToken] = useState('');

  const timerComponent = useMemo(() => {
    return <Timer isStart={isEmailValidate} setTimeUp={setTimeUp} />;
  }, [isEmailValidate]);

  useEffect(() => {
    if (isTimeUp) {
      alert('인증번호가 만료되었습니다. 다시 받아주세요.');
      setIsEmailValidate(false);
    }

    setTimeout(() => {
      setTimeUp(false);
    }, 500);
  }, [isTimeUp]);

  const {
    mutate: registerEmailValidateRequest,
    data: registerEmailValidateData,
    error: registerEmailValidateError,
    isLoading: registerEmailValidateLoading,
  } = useRegisterEmailValidateRequest();

  useEffect(() => {
    if (registerEmailValidateData) {
      alert('인증번호가 발송되었습니다.');
      setIsEmailValidate(true);
    } else if (registerEmailValidateError) {
      alert(registerEmailValidateError.message);
    }
  }, [registerEmailValidateData, registerEmailValidateError]);

  const {
    mutate: codeValidateRequest,
    data: codeValidateData,
    error: codeValidateError,
    isLoading: codeValidateLoading,
  } = useRegisterCodeValidateRequest();

  useEffect(() => {
    if (codeValidateData) {
      alert('인증에 성공했습니다.');
      setRegisterToken(codeValidateData.data.registerToken);
      setIsCertificated(true);
    } else if (codeValidateError) {
      alert(codeValidateError.message);
    }
  }, [codeValidateData, codeValidateError]);

  const {
    mutate: registerRequest,
    data: registerData,
    error: registerError,
    isLoading: registerLoading,
  } = useRegisterRequest();

  useEffect(() => {
    if (registerData) {
      alert('회원가입이 완료되었습니다.');
      localStorage.removeItem('registerToken');
      navigate('/my');
    } else if (registerError) {
      alert(registerError.message);
      localStorage.removeItem('registerToken');
    }
  }, [registerData, registerError]);

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handleCodeInput = (e) => {
    setCode(e.target.value);
  };

  const handleIdInput = (e) => {
    setId(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailValidateBtn = () => {
    const data = {
      email: email,
    };

    registerEmailValidateRequest(data);
  };

  const handleCodeValidateBtn = () => {
    const data = {
      authCode: code,
      email: email + '@sch.ac.kr',
    };

    codeValidateRequest(data);
  };

  const handleRegisterBtn = () => {
    const data = {
      registerToken: registerToken,
      email: email + '@sch.ac.kr',
      id: id,
      pw: password,
    };

    registerRequest(data);
  };

  return (
    <RegisterContainer>
      <Header pageTitle="회원가입" />
      <InputSection>
        <Notice>순천향대학교 이메일을 통해 해당 대학교 학생임을 인증한 후 가입을 진행할 수 있습니다.</Notice>
        <InputBox>
          <div>
            <SquareInput placeholder="ex) abcd123" onChange={handleEmailInput} />
            <Domain>@sch.ac.kr</Domain>
          </div>
          <Button
            height={48}
            bgColor={'#4B7CC4'}
            onClick={() => handleEmailValidateBtn()}
            disabled={registerEmailValidateLoading}
          >
            인증번호 받기
          </Button>
        </InputBox>
        {isEmailValidate ? (
          <InputBox>
            <div>
              <SquareInput placeholder="인증번호를 입력해주세요." onChange={handleCodeInput} />
              {isCertificated ? <TimerSection>인증완료</TimerSection> : <TimerSection>{timerComponent}</TimerSection>}
            </div>
            <Button
              height={48}
              bgColor={'#4B7CC4'}
              onClick={() => handleCodeValidateBtn()}
              disabled={codeValidateLoading}
            >
              인증하기
            </Button>
          </InputBox>
        ) : (
          ''
        )}
        {isCertificated ? (
          <InputBox>
            <SquareInput type="text" placeholder="아이디" onChange={handleIdInput} />
            <SquareInput type="password" placeholder="비밀번호" onChange={handlePasswordInput} />
            <Button height={48} onClick={() => handleRegisterBtn()} disabled={registerLoading}>
              회원가입
            </Button>
          </InputBox>
        ) : (
          ''
        )}
      </InputSection>
      <OtherOptionSection>
        <Link to="/my">로그인 하러가기</Link>
        <Link to="/find-account">아이디/비밀번호 찾기</Link>
      </OtherOptionSection>
    </RegisterContainer>
  );
}

export default RegisterPage;
