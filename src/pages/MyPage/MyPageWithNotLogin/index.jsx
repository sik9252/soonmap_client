import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginBtnContainer, LoginOptionSection, OtherOptionSection } from './style';
import { SquareInput } from '../../../components/Input';
import { Button } from '../../../components/Button';
import { useLoginRequest } from '../../../api/Account';

function NotLogin() {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const { mutate: loginRequest, data: loginData, error: loginError, isLoading: loginLoading } = useLoginRequest();

  useEffect(() => {
    if (loginData) {
      localStorage.setItem('user-accessToken', loginData.data.accessToken);
      localStorage.setItem('user-refreshToken', loginData.data.refreshToken);
      localStorage.setItem('user-userId', loginData.data.name);
      navigate('/');
    } else if (loginError) {
      alert(loginError.message);
    }
  }, [loginData, loginError]);

  const handleIdInput = (e) => {
    setId(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleRegisterBtn = () => {
    const data = {
      userId: id,
      userPw: password,
    };

    loginRequest(data);
  };

  return (
    <LoginBtnContainer>
      <SquareInput type="text" placeholder="아이디" onChange={handleIdInput} />
      <SquareInput type="password" placeholder="비밀번호" onChange={handlePasswordInput} />
      <LoginOptionSection>
        <Button height={48} onClick={() => handleRegisterBtn()} disabled={loginLoading}>
          로그인
        </Button>
        <OtherOptionSection>
          <Link to="/register">회원가입 하러가기</Link>
          <Link to="/find-account">아이디/비밀번호 찾기</Link>
        </OtherOptionSection>
      </LoginOptionSection>
    </LoginBtnContainer>
  );
}

export default NotLogin;
