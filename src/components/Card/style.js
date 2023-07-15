import styled from 'styled-components';
import COLOR from '../../styles/common/color';
// import { FONT_STYLES } from '../../styles/common/font';

export const CardContainer = styled.div`
  position: relative;
  width: 49%;
  height: 216px;
  background-color: ${COLOR.GRAY_0};
  border-radius: 10px;
  margin: 3px 0;
  cursor: pointer;
`;

export const CardInfo = styled.div`
  position: absolute;
  bottom: 0;
  padding: 10px;

  & > div:nth-child(1) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    white-space: normal;
    line-height: 1.2;
    margin-bottom: 5px;
  }

  & > div:nth-child(2) {
    & > svg {
      margin-right: 5px;
    }
  }
`;
