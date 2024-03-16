import styled from 'styled-components';
import COLOR from '../../styles/common/color';
import { FONT_STYLES } from '../../styles/common/font';

export const StyledSquareInput = styled.input`
  ${FONT_STYLES.P_R}
  font-size: 14px;
  width: ${({ $width }) => ($width ? `${$width}px` : '100%')};
  height: ${({ $height }) => `${$height}px`};
  border: none;
  padding: 15px;
  margin: 5px 0;
  border-radius: 7px;
  background-color: ${COLOR.GRAY_0};

  ::placeholder {
    color: #716b6b;
  }

  &:focus {
    outline: none;
  }
`;
