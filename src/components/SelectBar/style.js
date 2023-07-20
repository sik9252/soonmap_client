import styled from 'styled-components';
import COLOR from '../../styles/common/color';

export const SelectBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Select = styled.select`
  flex: 1;
  min-width: 0;
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 64px;
  background-color: ${COLOR.MAIN_WHITE};
  background-image: ${({ $selectBtn }) => `url('${$selectBtn}')`};
  -webkit-appearance: none;
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: center;
  background-size: 32px;
  height: 38px;
  padding: 0 18px;
  font-size: 14px;
  font-weight: 500;
  color: ${COLOR.DarkGray};
`;
