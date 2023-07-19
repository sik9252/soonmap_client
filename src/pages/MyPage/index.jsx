import React, { useState } from 'react';
import { MyContainer, UserName } from './style';
import Header from '../../components/Header';
import Login from '../../components/MyPageWithLogin';
import NotLogin from '../../components/MyPageWithNotLogin';

const LoginHeader = () => {
  return (
    <>
      <UserName>홍길동</UserName>님 안녕하세요.
    </>
  );
};

function MyPage() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <MyContainer>
      <Header pageTitle={isLogin ? <LoginHeader /> : '로그인'} />
      {isLogin ? <Login /> : <NotLogin />}
    </MyContainer>
  );
}

export default MyPage;
