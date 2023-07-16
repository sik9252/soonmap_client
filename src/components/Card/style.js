import styled from 'styled-components';
import COLOR from '../../styles/common/color';

export const CardContainer = styled.div`
  position: relative;
  width: 49%;
  height: 216px;
  background-color: ${COLOR.GRAY_0};
  border-radius: 10px;
  margin: 3px 0;
  cursor: pointer;
  background-image: ${({ $thumbnail }) => `url('${$thumbnail}')`};
  background-size: cover;
  background-repeat: no-repeat;
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

  & > div:nth-child(1) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    white-space: normal;
    line-height: 1.2;
    margin-bottom: 8px;
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
