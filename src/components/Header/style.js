import styled from 'styled-components';
import { FONT_STYLES } from '../../styles/common/font';
import COLOR from '../../styles/common/color';

export const HeaderContainer = styled.div`
  ${FONT_STYLES.P_B}
  width: 100%;
  height: 52px;
  font-size: 18px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-bottom: 1px solid ${COLOR.GRAY_0};

  & > svg {
    cursor: pointer;
  }

  & > span {
    margin-left: 8px;
  }
`;
