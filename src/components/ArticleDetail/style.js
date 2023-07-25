import styled from 'styled-components';
import { FONT_STYLES } from '../../styles/common/font';
import COLOR from '../../styles/common/color';

export const ArticleDetailContainer = styled.div`
  padding: 20px 15px;
  border-top: 2px solid ${COLOR.MAIN_BLUE};
`;

export const ArticleTitleSection = styled.div`
  ${FONT_STYLES.P_B};
  font-size: 14px;
  color: ${COLOR.MAIN_BLUE};
`;

export const ArticleInfoSection = styled.div`
  display: flex;
  font-size: 12px;
  color: ${COLOR.GRAY_2};
  padding: 10px 0;

  & > div:nth-child(2) {
    padding-left: 15px;
  }
`;

export const ArticleContentSection = styled.div`
  border-top: 1px solid ${COLOR.GRAY_0};
  padding-top: 10px;
`;
