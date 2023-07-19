import styled from 'styled-components';
import COLOR from '../../styles/common/color';

export const InfoContainer = styled.div`
  ${({ theme }) => theme.container.bottomPadding};
`;

export const SearchSection = styled.div`
  background-color: ${COLOR.GRAY_0};
  padding: 15px 20px;
`;

export const ArticleList = styled.div`
  border-top: 2px solid ${COLOR.MAIN_BLUE};
`;
