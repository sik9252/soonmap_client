import styled, { css, keyframes } from 'styled-components';
import COLOR from '../../styles/common/color';
import { FONT_STYLES } from '../../styles/common/font';

const slideUp = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const BuildingInfoContainer = styled.div`
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 900px;
  display: none;
  background-color: ${COLOR.MAIN_WHITE};
  border-radius: 16px;
  padding: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  z-index: 10;
  animation: ${slideUp} 0.3s ease-in-out;

  ${({ $buildingInfoPopup }) =>
    $buildingInfoPopup
      ? css`
          display: block;
        `
      : null}

  & > button {
    ${FONT_STYLES.P_R}
    font-size: 15px;
    display: flex;
    align-items: center;
    margin: 20px auto 0 auto;

    & > svg {
      width: 16px;
      height: 16px;
      margin-left: 10px;
      color: ${COLOR.MAIN_WHITE};
    }
  }
`;

export const BuildingInfoSection = styled.div`
  width: 100%;

  @media only screen and (min-width: 480px) {
    display: flex;
  }
`;

export const BuildingImageSection = styled.div`
  & > img {
    width: 100%;
    display: block;
    margin: 0 auto;
    border-radius: 16px;
  }

  @media only screen and (min-width: 480px) {
    display: flex;
    width: 45%;
    margin-right: 30px;
  }
`;

export const BuildingMainInfoSection = styled.div`
  margin-top: 20px;

  & > div:nth-child(1) {
    ${FONT_STYLES.P_B};
    font-size: 18px;
  }

  & > div:nth-child(2) {
    font-size: 14px;
    padding-top: 10px;
  }

  @media only screen and (min-width: 480px) {
    width: 55%;
  }
`;
