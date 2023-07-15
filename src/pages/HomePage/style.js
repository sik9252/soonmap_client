import styled from 'styled-components';
import COLOR from '../../styles/common/color';
import { FONT_STYLES } from '../../styles/common/font';

export const HomeContainer = styled.div`
  padding: 20px 10px;
`;

export const NoticeBox = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 10px;
  padding: 20px 10px;
  color: ${COLOR.MAIN_WHITE};
  background-image: ${({ $bgImg }) => `url('${$bgImg}')`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const InfoBox = styled.div``;

export const AdBox = styled.div``;

export const SubTitle = styled.div`
  ${FONT_STYLES.P_B}
  padding-bottom: 8px;
`;
