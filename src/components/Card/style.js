import styled from 'styled-components';
import COLOR from '../../styles/common/color';
import defaultThumbnail from '/soonmap.png';

export const CardContainer = styled.div`
  position: relative;
  width: 49%;
  height: 216px;
  border-radius: 10px;
  margin: 3px 0;
  cursor: pointer;
  background-image: ${({ $thumbnail }) => ($thumbnail ? `url('${$thumbnail}')` : `url('${defaultThumbnail}')`)};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media only screen and (min-width: 480px) {
    margin: 5px 0;
  }

  @media only screen and (min-width: 600px) {
    margin: 8px 0;
  }

  @media only screen and (min-width: 900px) {
    margin: 10px 0;
  }
`;

export const CardBackground = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  border-radius: 10px;
`;

export const CardInfo = styled.div`
  position: absolute;
  bottom: 0;
  padding: 10px;
  color: ${COLOR.MAIN_WHITE};
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > div:nth-child(1) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    white-space: normal;
    line-height: 1.2;
    position: relative;
    bottom: 10px;
  }

  & > div:nth-child(2) {
    display: flex;
    align-items: center;
    font-size: 14px;

    & > svg {
      margin-right: 5px;
    }
  }
`;
