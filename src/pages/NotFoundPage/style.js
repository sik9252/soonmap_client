import styled from 'styled-components';
import COLOR from '../../styles/common/color';
import { FONT_STYLES } from '../../styles/common/font';

export const NotFoundPageContainer = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ErrorCodeSection = styled.div`
  ${FONT_STYLES.P_B};
  font-size: 40px;
  color: ${COLOR.MAIN_BLUE};
  padding-bottom: 15px;
`;

export const ErrorTextSection = styled.div``;
