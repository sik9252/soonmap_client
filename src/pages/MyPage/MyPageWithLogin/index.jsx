import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContainer, OptionSection } from './style';
import { Button, CancelButton } from '../../../components/Button';
import { useLogoutRequest, useWithDrawlRequest } from '../../../api/Account';

function Login() {
  const navigate = useNavigate();
  const { mutate: logoutRequest, data: logoutData, error: logoutError, isLoading: logoutLoading } = useLogoutRequest();
  const {
    mutate: withDrawlRequest,
    data: withDrawlData,
    error: withDrawlError,
    isLoading: withDrawlLoading,
  } = useWithDrawlRequest();

  const handleInquiryBtn = () => {
    window.open('https://open.kakao.com/o/sfjNZfDf', '_blank');
  };

  const handleLogoutBtn = () => {
    logoutRequest();
  };

  useEffect(() => {
    if (logoutData) {
      alert('로그아웃 되었습니다.');
      localStorage.removeItem('user-accessToken');
      localStorage.removeItem('user-removeToken');
      localStorage.removeItem('user-userId');
      navigate('/');
    } else if (logoutError) {
      alert(logoutError.message);
    }
  }, [logoutData, logoutError]);

  const handleWithDrawlBtn = () => {
    const isYesClicked = confirm('정말 탈퇴하시겠습니까?');
    if (isYesClicked) withDrawlRequest();
  };

  useEffect(() => {
    if (withDrawlData) {
      alert('탈퇴가 완료되었습니다.');
      localStorage.removeItem('user-accessToken');
      localStorage.removeItem('user-removeToken');
      localStorage.removeItem('user-userId');
      navigate('/');
    } else if (withDrawlError) {
      alert(withDrawlError.message);
    }
  }, [withDrawlData, withDrawlError]);

  return (
    <LoginContainer>
      <OptionSection>
        <Button height={48} onClick={() => handleLogoutBtn()} disabled={logoutLoading}>
          로그아웃
        </Button>
        <Button height={48} onClick={() => handleInquiryBtn()}>
          문의하기
        </Button>
        <CancelButton height={48} onClick={() => handleWithDrawlBtn()} disabled={withDrawlLoading}>
          회원 탈퇴
        </CancelButton>
      </OptionSection>
    </LoginContainer>
  );
}

export default Login;
