import React from 'react';
import { Link } from 'react-router-dom';
import { LoginBtnContainer, LoginOptionSection, OtherOptionSection } from './style';
import { SquareInput } from '../../../components/Input';
import { Button } from '../../../components/Button';

function NotLogin() {
  return (
    <LoginBtnContainer>
      <SquareInput placeholder="아이디" />
      <SquareInput placeholder="비밀번호" />
      <LoginOptionSection>
        <Button height={48}>로그인</Button>
        <OtherOptionSection>
          <Link to="/register">회원가입 하러가기</Link>
          <Link to="/find-account">아이디/비밀번호 찾기</Link>
        </OtherOptionSection>
      </LoginOptionSection>
    </LoginBtnContainer>
  );
}

export default NotLogin;
