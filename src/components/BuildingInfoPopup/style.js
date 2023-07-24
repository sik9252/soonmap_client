import styled, { css, keyframes } from 'styled-components';
import COLOR from '../../styles/common/color';
import { FONT_STYLES } from '../../styles/common/font';

const slideUp = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.8;
  }
`;

export const BuildingInfoContainer = styled.div`
  display: none;
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 900px;
  background-color: ${COLOR.MAIN_WHITE};
  border-radius: 16px;
  padding: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  z-index: 10;
  animation: ${slideUp} 0.3s ease-in-out;
  opacity: 0.8;
  cursor: pointer;

  ${({ $buildingInfoPopup }) =>
    $buildingInfoPopup
      ? css`
          display: block;
        `
      : null};
`;

export const BuildingInfoSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const BuildingImageSection = styled.div`
  & > img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
  }

  @media only screen and (max-width: 480px) {
    & > img {
      width: 65px;
      height: 65px;
    }
  }
`;

export const BuildingMainInfoSection = styled.div`
  padding-left: 15px;

  & > div:nth-child(1) {
    display: flex;
    align-items: center;
    ${FONT_STYLES.P_B};
    font-size: 18px;

    & > svg {
      width: 16px;
      height: 16px;
      margin-left: 10px;
      color: ${COLOR.GRAY_2};
      cursor: pointer;
    }

    @media only screen and (max-width: 480px) {
      font-size: 16px;
    }
  }

  & > div:nth-child(2) {
    font-size: 14px;
    padding-top: 10px;

    @media only screen and (max-width: 480px) {
      font-size: 12px;
    }
  }
`;
