import styled from 'styled-components';
import COLOR from '../../styles/common/color';
import { FONT_STYLES } from '../../styles/common/font';

export const RegisterContainer = styled.div`
  padding: 0 15px 20px 15px;
`;

export const Notice = styled.div`
  color: #dc143c;
  font-size: 12px;
  margin-bottom: 5px;
`;

export const InputSection = styled.div`
  margin-top: 20px;
`;

export const OtherOptionSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 10px;
  font-size: 14px;
  color: ${COLOR.GRAY_2};
`;

export const InputBox = styled.div`
  margin: 20px 0;

  & > button {
    margin-top: 10px;
  }
`;
