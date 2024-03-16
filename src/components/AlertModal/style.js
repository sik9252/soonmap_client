import styled from 'styled-components';
import COLOR from '../../styles/common/color';
import { FONT_STYLES } from '../../styles/common/font';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBackground = styled.div`
  width: 80%;
  background-color: ${COLOR.BG_COLOR};
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const CancelSection = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;

  & > svg {
    width: 16px;
    height: 16px;
  }
`;

export const ModalTitle = styled.div`
  ${FONT_STYLES.P_B};
`;

export const ModalContent = styled.div`
  font-size: 14px;
  padding: 10px 0;
`;
