import React, { useEffect, useRef, useState } from 'react';
import { ModalContainer, ModalBackground, CancelSection, ModalTitle, ModalContent, ShareButton } from './style';
import { ReactComponent as CancelBtn } from '../../assets/icons/CancelBtn.svg';
import { Box, Text, Flex } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';

function ShareModal({ title, text, isOpen, closeModal }) {
  const urlRef = useRef(null);
  const [isCopied, setIsCopied] = useState(false);

  // PWA 테스트
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true);
    });
  }, []);

  const onClickInstall = () => {
    if (!deferredPrompt) return;

    setShowInstallButton(false);

    deferredPrompt.prompt();

    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }

      setDeferredPrompt(null);
    });
  };

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
        setIsCopied(true);
      }
    } catch (error) {
      alert('복사에 실패했습니다.');
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
          {isCopied ? <div>복사되었습니다!</div> : ''}
          {showInstallButton && (
            <Box onClick={onClickInstall} mt="10px">
              <Text color="#777" fontSize="12px" mb="5px">
                휴대폰 홈 화면에 순맵을 추가하여 더욱 빠르게 접근해보세요!
              </Text>
              <Flex alignItems="center" cursor="pointer">
                <DownloadIcon mr="10px" color="#24549C" />
                <Text color="#24549C">홈 화면에 순맵 추가하기</Text>
              </Flex>
            </Box>
          )}
        </ModalContent>
      </ModalBackground>
    </ModalContainer>
  );
}

export default ShareModal;
