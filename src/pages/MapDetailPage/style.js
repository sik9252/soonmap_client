import styled, { css } from 'styled-components';
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
  padding: 10px;

  & > img {
    width: 100%;
    height: 100%;
  }
`;
