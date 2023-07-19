import styled, { css } from 'styled-components';
import COLOR from '../../styles/common/color';
import { FONT_STYLES } from '../../styles/common/font';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px 40px 0px;

  & > svg {
    cursor: pointer;
  }
  & > svg:nth-child(1) {
    margin-right: 7px;
  }
  & > svg:nth-last-child(1) {
    margin-left: 7px;
  }
`;

export const PageNum = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${COLOR.GRAY_1};
  border-radius: 4px;
  font-size: 12px;
  margin: 0 5px;
  cursor: pointer;

  ${({ $currentPage, $number }) =>
    $currentPage === $number
      ? css`
          ${FONT_STYLES.P_B}
          border: 1px solid ${COLOR.MAIN_BLUE};
          color: ${COLOR.MAIN_BLUE};
        `
      : null}
`;

export const HiddenBtn = styled.div`
  width: 30px;
  height: 30px;
`;
