import React from 'react';
import { LoginContainer, OptionSection } from './style';
import { Button, CancelButton } from '../../../components/Button';

function Login() {
  return (
    <LoginContainer>
      <OptionSection>
        <Button height={48}>문의하기</Button>
        <CancelButton height={48}>회원 탈퇴</CancelButton>
      </OptionSection>
    </LoginContainer>
  );
}

export default Login;
