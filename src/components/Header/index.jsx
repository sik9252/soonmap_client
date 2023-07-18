import React from 'react';
import { HeaderContainer } from './style';
import { ReactComponent as PrevBtn } from '../../assets/icons/PrevBtn.svg';

function Header({ pageTitle }) {
  return (
    <HeaderContainer>
      <PrevBtn />
      <span>{pageTitle}</span>
    </HeaderContainer>
  );
}

export default Header;
