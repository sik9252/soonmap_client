import styled from 'styled-components';
import COLOR from '../../styles/common/color';

export const InfoContainer = styled.div``;

export const SearchSection = styled.div`
  background-color: ${COLOR.GRAY_0};
  padding: 15px 20px;
`;

export const ArticleList = styled.div`
  border-top: 2px solid ${COLOR.MAIN_BLUE};
`;

export const PageNationSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px 40px 0px;

  & > svg {
    cursor: pointer;
  }
`;

export const HiddenBtn = styled.div`
  width: 30px;
  height: 30px;
`;
