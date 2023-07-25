import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer } from './style';
import { ReactComponent as PrevBtn } from '../../assets/icons/PrevBtn.svg';

function Header({ pageTitle }) {
  const history = useNavigate();

  const clickGoBackBtn = () => {
    history(-1);
  };

  return (
    <HeaderContainer>
      <PrevBtn onClick={() => clickGoBackBtn()} />
      <span>{pageTitle}</span>
    </HeaderContainer>
  );
}

export default Header;
