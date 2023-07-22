import styled from 'styled-components';
import COLOR from '../../styles/common/color';

export const MapContainer = styled.div`
  margin: -60px -10px 0;
  position: relative;
  overflow: hidden;
`;

export const MapHead = styled.div`
  position: fixed;
  left: 50%;
  top: 24px;
  transform: translateX(-50%);
  z-index: 10;
  width: 100%;
  max-width: 800px;
  padding: 0 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  & > form {
    flex: 1;
    min-width: 0;
    padding: 0 18px;
    margin-left: 8px;
    height: 40px;
    border-radius: 65px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  & > form > div {
    display: flex;
    flex: 1;
    width: 100%;
  }

  & > form > div > input {
    flex: 1;
    min-width: 0;
    font-size: 14px;
    color: ${COLOR.DarkGray};
    font-weight: 500;
    padding-right: 18px;
    border: none;
    outline: none;
  }

  & > button {
    width: 40px;
    height: 40px;
    font-size: 0;
    border-radius: 50%;
    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
`;

export const MapHeadAnchor = styled.a`
  display: inline-block;
  content: '';
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.8);
  background-image: ${({ $mapMyBtn }) => `url('${$mapMyBtn}')`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: transparent;
`;

export const MapBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MapSection = styled.div`
  max-width: 1000px;
  width: 100%;
  height: 105vh;
  object-fit: cover;
`;

export const MapFoot = styled.div`
  position: fixed;
  display: none;
  left: 50%;
  bottom: 100px;
  transform: translateX(-50%);
  z-index: 10;
  width: 100%;
  max-width: 900px;
  background: ${COLOR.MAIN_WHITE};
  border-radius: 16px;
  padding: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);

  & > img {
    position: fixed;
    right: 4%;
    bottom: 29px;
    width: 200px;
    height: 100px;
    display: block;
    max-width: 100%;
    margin: 0 auto;
  }

  & > strong {
    display: block;
    font-size: 18px;
    font-weight: 700;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0 0 5px;
    padding: 24px 10px 0;
  }

  & > p {
    font-size: 14px;
    line-height: 1.3;
    padding: 0 10px;
  }

  & > button {
    margin: 20px auto 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 170px;
    height: 45px;
    border: 1px solid ${COLOR.DarkGray};
    border-radius: 30px;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
  }

  @media screen and (max-width: 900px) {
    & > img {
      right: 4%;
      bottom: 40px;
      width: 180px;
      height: 90px;
  }

   @media screen and (max-width: 600px) {
    & > img {
      right: 4%;
      bottom: 55px;
      width: 145px;
      height: 75px;
    }
  }

   @media screen and (max-width: 480px) {
    & > img {
      right: 5%;
      bottom: 70px;
      width: 120px;
      height: 60px;
    }
  }
`;

export const MapFootAnchorAfter = styled.a`
  display: inline-block;
  content: '';
  width: 18px;
  height: 18px;
  margin-left: 10px;
  background-image: ${({ $arrowBtn }) => `url('${$arrowBtn}')`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
