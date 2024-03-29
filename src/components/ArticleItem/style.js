import styled, { css } from 'styled-components';
import { FONT_STYLES } from '../../styles/common/font';
import COLOR from '../../styles/common/color';

export const ArticleItemContainer = styled.div`
  padding: 20px 15px;
  border-bottom: 1px solid ${COLOR.GRAY_1};
  cursor: pointer;
`;

export const ArticleTitleSection = styled.div`
  ${FONT_STYLES.P_B}
  display: flex;
  align-items: center;
  font-size: 14px;

  & > span {
    max-width: 250px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  ${({ $isTop }) =>
    $isTop
      ? css`
          & > span {
            padding-left: 8px;
          }
        `
      : null}
`;

export const SvgBox = styled.div`
  width: 34px;
`;

export const ArticleInfoSection = styled.div`
  display: flex;
  font-size: 12px;
  color: ${COLOR.GRAY_2};
  padding-top: 8px;

  & > div {
    padding-right: 15px;
  }
`;
