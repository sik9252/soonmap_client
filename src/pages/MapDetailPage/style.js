import styled from 'styled-components';
import COLOR from '../../styles/common/color';

export const MapDetailContainer = styled.div``;

export const SelectSection = styled.div`
  background-color: ${COLOR.GRAY_0};
  padding: 15px 20px;
  margin-bottom: 10px;
`;

export const FloorImageSection = styled.div`
  display: flex;
  justify-content: center;

  & > img {
    border-top: 1px solid ${COLOR.GRAY_0};
    border-bottom: 1px solid ${COLOR.GRAY_0};
  }
`;
