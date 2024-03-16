import React, { useState } from 'react';
import { FooterContainer, List, ListItem, Link2 } from './style';
import Home from '../../assets/icons/IconFooterHome.svg';
import Food from '../../assets/icons/IconFooterFood.svg';
import Map from '../../assets/icons/icon_footer_map.png';
import MyPage from '../../assets/icons/IconFooterMy.svg';
import Share from '../../assets/icons/IconFooterShare.svg';
import AlertModal from '../../components/AlertModal';
import ShareModal from '../../components/ShareModal';

export const MenuBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const openAlertModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeAlertModal = () => {
    setIsModalOpen(false);
  };

  const openShareModal = (e) => {
    e.preventDefault();
    setIsShareModalOpen(true);
  };

  const closeShareModal = () => {
    setIsShareModalOpen(false);
  };

  return (
    <FooterContainer>
      <AlertModal
        title={'현재 기능 개발 중 입니다!'}
        text={'빠른 시일 내에 완성하겠습니다 :)'}
        isOpen={isModalOpen}
        closeModal={closeAlertModal}
      />
      <ShareModal
        title={'공유하기'}
        text={'아래 링크를 복사하여 다른 사람들에게 공유할 수 있어요.'}
        isOpen={isShareModalOpen}
        closeModal={closeShareModal}
      />

      <List>
        <ListItem $home={Home}>
          <Link2 href="/">홈</Link2>
        </ListItem>
        <ListItem $food={Food} onClick={openAlertModal}>
          <Link2 href="/food">점메추</Link2>
        </ListItem>
        <ListItem $map={Map}>
          <Link2 href="/map">지도검색</Link2>
        </ListItem>
        <ListItem $myPage={MyPage}>
          <Link2 href="/my">마이홈</Link2>
        </ListItem>
        <ListItem $share={Share} onClick={openShareModal}>
          <Link2 href="#">공유</Link2>
        </ListItem>
      </List>
    </FooterContainer>
  );
};
