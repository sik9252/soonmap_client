import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RegisterContainer, Notice, InputSection, OtherOptionSection, InputBox } from './style';
import Header from '../../components/Header';
import { SquareInput } from '../../components/Input';
import { Button } from '../../components/Button';

function RegisterPage() {
  const [isEmailValidate, setIsEmailValidate] = useState(false);
  const [isCertificated, setIsCertificated] = useState(false);

  return (
    <RegisterContainer>
      <Header pageTitle="회원가입" />
      <InputSection>
        <Notice>순천향대학교 이메일을 통해 해당 대학교 학생임을 인증한 후 가입을 진행할 수 있습니다.</Notice>
        <InputBox>
          <SquareInput placeholder="이메일 ex) example@sch.ac.kr" />
          <Button height={48} bgColor={'#4B7CC4'}>
            인증번호 받기
          </Button>
        </InputBox>
        {isEmailValidate ? (
          <InputBox>
            <SquareInput placeholder="인증번호를 입력해주세요." />
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
