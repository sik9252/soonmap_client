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
    background: ${COLOR.MAIN_WHITE};
    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 65px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  & > form > input {
    flex: 1;
    min-width: 0;
    font-size: 14px;
    color: ${COLOR.DarkGray};
    font-weight: 500;
    padding-right: 18px;
    border: none;
    outline: none;
  }
`;

export const MapHeadAnchor = styled.a`
  width: 40px;
  height: 40px;
  font-size: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
  background-image: ${({ $mapMyBtn }) => `url('${$mapMyBtn}')`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 30px;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

export const SearchAnchor = styled.a`
  width: 25px;
  height: 25px;
  font-size: 0;
  background-image: ${({ $searchBtn }) => `url('${$searchBtn}')`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;
`;

export const MapBody = styled.div`
  height: 100%;
  position: relative;
`;

export const MapSection = styled.div`
  left: 2%;
  top: 0;
  width: 1000px;
  height: 600px;
  margin: -20px 0 0;
  object-fit: cover;
`;

export const MapFoot = styled.div`
  position: fixed;
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
