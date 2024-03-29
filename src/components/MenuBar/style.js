import styled from 'styled-components';
import COLOR from '../../styles/common/color';

export const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  z-index: 9999;
  width: 100%;
  max-width: 1024px;
  padding: 20px 0 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const List = styled.ul`
  flex: 1;
  min-width: 0;
  margin: 0;
  padding: 0;
  border-radius: 8px 8px 0 0;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  background: ${COLOR.MAIN_WHITE};
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;
`;

export const ListItem = styled.li`
  width: 20%;
  position: relative;

  &:nth-of-type(1) > a:before {
    background-image: ${({ $home }) => `url('${$home}')`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 23px;
  }

  &:nth-of-type(2) > a:before {
    background-image: ${({ $food }) => `url('${$food}')`};
    background-size: 24px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 20px;
  }

  &:nth-of-type(3) > a {
    color: ${COLOR.MAIN_BLUE} !important;
    font-weight: 600;
    font-size: 14px;
    align-items: center;
  }

  &:nth-of-type(3) > a:before {
    width: 48px;
    height: 48px;
    background-image: ${({ $map }) => `url('${$map}')`};
    position: absolute;
    left: 50%;
    top: -51px;
    transform: translateX(-50%);
    background-repeat: no-repeat;
    background-position: center;
  }

  &:nth-of-type(4) > a:before {
    background-image: ${({ $myPage }) => `url('${$myPage}')`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 20px;
    height: 20px;
    margin-bottom: 3px;
  }

  &:nth-of-type(5) > a:before {
    background-image: ${({ $share }) => `url('${$share}')`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 20px;
    height: 20px;
    margin-bottom: 3px;
  }
`;

export const Link = styled.a`
  display: block;
  font-size: 12px;
  color: ${COLOR.DarkGray} !important;
  text-align: center;
  padding: 4px 0 10px;
`;

export const Link2 = styled(Link)`
  &::before {
    display: block;
    content: '';
    margin: 0 auto;
    width: 28px;
    height: 28px;
    background-size: cover;
    background-position: center;
  }
`;
