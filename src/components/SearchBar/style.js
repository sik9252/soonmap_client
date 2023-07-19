import styled from 'styled-components';
import COLOR from '../../styles/common/color';

export const InputBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 0;
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 64px;
  background-color: ${COLOR.MAIN_WHITE};
  background-image: ${({ $searchBtn }) => `url('${$searchBtn}')`};
  background-repeat: no-repeat;
  background-position-x: calc(100% - 10px);
  background-position-y: center;
  background-size: 25px;
  height: 38px;
  padding: 0 18px;
  font-size: 14px;
  color: ${COLOR.DarkGray};
`;
