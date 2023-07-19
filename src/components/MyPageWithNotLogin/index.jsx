import React from 'react';
import { LoginBtnContainer } from './style';
import KakaoLoginBtn from '../../assets/icons/KakaoLogin.png';
import NaverLoginBtn from '../../assets/icons/NaverLogin.png';

function NotLogin() {
  return (
    <LoginBtnContainer>
      <img src={KakaoLoginBtn} alt="카카오로 로그인하기" />
      <img src={NaverLoginBtn} alt="네이버로 로그인하기" />
    </LoginBtnContainer>
  );
}

export default NotLogin;
