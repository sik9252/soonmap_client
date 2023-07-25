import styled from 'styled-components';
import COLOR from '../../styles/common/color';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100% - 60px);
  padding: 20px 15px;
`;

export const OptionSection = styled.div`
  width: 80%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  & > button {
    margin: 5px 0;
  }
`;
