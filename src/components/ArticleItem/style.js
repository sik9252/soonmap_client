import styled, { css } from 'styled-components';
import { FONT_STYLES } from '../../styles/common/font';
import COLOR from '../../styles/common/color';

export const ArticleItemContainer = styled.div`
  padding: 20px 15px;
  border-bottom: 1px solid ${COLOR.GRAY_1};
`;

export const ArticleTitleSection = styled.div`
  ${FONT_STYLES.P_B}
  display: flex;
  align-items: center;
  font-size: 14px;

  ${({ isTop }) =>
    isTop
      ? css`
          & > span {
            color: ${COLOR.TOP_NOTICE_COLOR};
            padding-left: 8px;
          }
        `
      : null}
`;

export const ArticleInfoSection = styled.div`
  display: flex;
  font-size: 12px;
  color: ${COLOR.GRAY_2};
  padding-top: 10px;

  & > div:nth-child(2) {
    padding-left: 15px;
  }
`;
