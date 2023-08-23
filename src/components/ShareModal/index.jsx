import React, { useRef } from 'react';
import { ModalContainer, ModalBackground, CancelSection, ModalTitle, ModalContent, ShareButton } from './style';
import { ReactComponent as CancelBtn } from '../../assets/icons/CancelBtn.svg';

function ShareModal({ title, text, isOpen, closeModal }) {
  const urlRef = useRef(null);

  if (!isOpen) {
    return null;
  }

  const clickModalBackground = (e) => {
    e.stopPropagation();
  };

  const copyToClipboard = async () => {
    try {
      if (urlRef.current) {
        await navigator.clipboard.writeText(urlRef.current.defaultValue);
        console.log('URL copied to clipboard');
      }
    } catch (error) {
      console.error('Failed to copy URL to clipboard:', error);
    }
  };

  return (
    <ModalContainer onClick={closeModal}>
      <ModalBackground onClick={(e) => clickModalBackground(e)}>
        <CancelSection>
          <CancelBtn onClick={closeModal} />
        </CancelSection>
        <ModalTitle>{title}</ModalTitle>
        <ModalContent>
          {text}
          <div>
            <input ref={urlRef} type="text" defaultValue={window.location.href} readOnly />
            <ShareButton onClick={copyToClipboard}>복사</ShareButton>
          </div>
        </ModalContent>
      </ModalBackground>
    </ModalContainer>
  );
}

export default ShareModal;
