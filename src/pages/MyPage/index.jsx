import React, { useState } from 'react';
import { MyContainer, UserName } from './style';
import Header from '../../components/Header';
import Login from './MyPageWithLogin';
import NotLogin from './MyPageWithNotLogin';

const LoginHeader = () => {
  return (
    <>
      <UserName>{localStorage.getItem('userId')}</UserName>님 안녕하세요.
    </>
  );
};

function MyPage() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <MyContainer>
      <Header pageTitle={localStorage.getItem('accessToken') ? <LoginHeader /> : '로그인'} />
      {localStorage.getItem('accessToken') ? <Login /> : <NotLogin />}
    </MyContainer>
  );
}

export default MyPage;
