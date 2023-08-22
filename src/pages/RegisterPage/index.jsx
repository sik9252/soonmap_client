import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { RegisterContainer, Notice, InputSection, OtherOptionSection, InputBox, Domain, TimerSection } from './style';
import Header from '../../components/Header';
import { SquareInput } from '../../components/Input';
import { Button } from '../../components/Button';
import Timer from '../../utils/timer';
import toast from 'react-hot-toast';

function RegisterPage() {
  const [isEmailValidate, setIsEmailValidate] = useState(false);
  const [isCertificated, setIsCertificated] = useState(false);

  const [isTimeUp, setTimeUp] = useState(false);

  const timerComponent = useMemo(() => {
    return <Timer isStart={isEmailValidate} setTimeUp={setTimeUp} />;
  }, [isEmailValidate]);

  useEffect(() => {
    if (isTimeUp) {
      toast.error('인증번호가 만료되었습니다. 다시 받아주세요.');
      setIsEmailValidate(false);
    }

    setTimeout(() => {
      setTimeUp(false);
    }, 500);
  }, [isTimeUp]);

  return (
    <RegisterContainer>
      <Header pageTitle="회원가입" />
      <InputSection>
        <Notice>순천향대학교 이메일을 통해 해당 대학교 학생임을 인증한 후 가입을 진행할 수 있습니다.</Notice>
        <InputBox>
          <div>
            <SquareInput placeholder="이메일을 입력해주세요. ex) abcd123" />
            <Domain>@sch.ac.kr</Domain>
          </div>
          <Button height={48} bgColor={'#4B7CC4'}>
            인증번호 받기
          </Button>
        </InputBox>
        {isEmailValidate ? (
          <InputBox>
            <div>
              <SquareInput placeholder="인증번호를 입력해주세요." />
              {isCertificated ? <TimerSection>인증완료</TimerSection> : <TimerSection>{timerComponent}</TimerSection>}
            </div>
            <Button height={48} bgColor={'#4B7CC4'}>
              인증하기
            </Button>
          </InputBox>
        ) : (
          ''
        )}
        {isCertificated ? (
          <InputBox>
            <SquareInput placeholder="아이디" />
            <SquareInput placeholder="비밀번호" />
            <Button height={48}>회원가입</Button>
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
