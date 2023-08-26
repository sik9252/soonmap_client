import styled from 'styled-components';
import COLOR from '../../styles/common/color';
import { FONT_STYLES } from '../../styles/common/font';

export const HomeContainer = styled.div`
  /* padding: 20px 10px; */
  padding: 20px 10px 35px 10px;
`;

export const SubTitle = styled.div`
  ${FONT_STYLES.P_B}
  font-size: 18px;
  cursor: pointer;
`;

export const NoticeSection = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 10px;
  padding: 20px 10px;
  color: ${COLOR.MAIN_WHITE};
  background-image: ${({ $bgImg }) => `url('${$bgImg}')`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  & > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;

    & > svg {
      cursor: pointer;
      color: ${COLOR.MAIN_WHITE};
    }
  }
`;

export const AdSection = styled.div`
  width: 100%;
  height: auto;
  margin: 20px 0;
  border-radius: 10px;
`;

export const InfoSection = styled.div`
  width: 100%;

  & > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;

    & > svg {
      cursor: pointer;
    }
  }
`;

export const InfoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
