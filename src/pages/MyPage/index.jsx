import React from 'react';
import { MyContainer, UserName } from './style';
import Header from '../../components/Header';
import Login from './MyPageWithLogin';
import NotLogin from './MyPageWithNotLogin';

const LoginHeader = () => {
  return (
    <>
      <UserName>{localStorage.getItem('user-userId')}</UserName>님 안녕하세요.
    </>
  );
};

function MyPage() {
  return (
    <MyContainer>
      <Header pageTitle={localStorage.getItem('user-accessToken') ? <LoginHeader /> : '로그인'} />
      {localStorage.getItem('user-accessToken') ? <Login /> : <NotLogin />}
    </MyContainer>
  );
}

export default MyPage;
