import styled from 'styled-components';
import COLOR from '../../styles/common/color';
import { FONT_STYLES } from '../../styles/common/font';

export const FindAccountContainer = styled.div`
  padding: 0 15px 20px 15px;
`;

export const InputBox = styled.div`
  margin: 20px 0;

  & > button {
    margin-top: 10px;
  }

  & > div:nth-of-type(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > input {
      width: 87%;
    }
  }
`;

export const Result = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div:nth-of-type(1) {
    ${FONT_STYLES.P_B}
  }

  & > div:nth-of-type(2) {
    width: 87%;
    height: 48px;
    padding: 10px;
    border-radius: 7px;
    background-color: ${COLOR.GRAY_0};
    color: ${COLOR.GRAY_2};
  }
`;

export const Domain = styled.div`
  margin-left: 10px;
`;

export const TimerSection = styled.div`
  margin-left: 10px;
  font-size: 14px;
  color: #dc143c;
`;
