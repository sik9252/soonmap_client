import styled from 'styled-components';
import COLOR from '../../styles/common/color';
import { FONT_STYLES } from '../../styles/common/font';

export const StyledButton = styled.button`
  ${FONT_STYLES.P_B}
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ $width }) => ($width ? `${$width}px` : '100%')};
  height: ${({ $height }) => `${$height}px`};
  background-color: ${COLOR.MAIN_BLUE};
  color: ${COLOR.MAIN_WHITE};
  border-radius: 160px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &:hover {
    cursor: pointer;
    transition: 0.3s;
    background-color: ${COLOR.MAIN_BLUE_HOVER};
  }
`;

export const StyledCancelButton = styled.button`
  ${FONT_STYLES.P_B}
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ $width }) => ($width ? `${$width}px` : '100%')};
  height: ${({ $height }) => `${$height}px`};
  background-color: ${COLOR.CANCEL_BTN};
  color: ${COLOR.MAIN_WHITE};
  border-radius: 160px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &:hover {
    cursor: pointer;
    transition: 0.3s;
    background-color: ${COLOR.CANCEL_BTN_HOVER};
  }
`;
