import React from 'react';
import { ModalContainer, ModalBackground, CancelSection, ModalTitle, ModalContent } from './style';
import { ReactComponent as CancelBtn } from '../../assets/icons/CancelBtn.svg';

function AlertModal({ title, text, isOpen, closeModal }) {
  if (!isOpen) {
    return null;
  }

  const clickModalBackground = (e) => {
    e.stopPropagation();
  };

  return (
    <ModalContainer onClick={closeModal}>
      <ModalBackground onClick={(e) => clickModalBackground(e)}>
        <CancelSection>
          <CancelBtn onClick={closeModal} />
        </CancelSection>
        <ModalTitle>{title}</ModalTitle>
        <ModalContent>{text}</ModalContent>
      </ModalBackground>
    </ModalContainer>
  );
}

export default AlertModal;
