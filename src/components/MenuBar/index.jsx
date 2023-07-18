import React from 'react';
import { FooterContainer, List, ListItem, Link2 } from './style';
import Home from '../../assets/icons/icon_footer_home.png';
import Food from '../../assets/icons/icon_footer_food.png';
import Loca from '../../assets/icons/icon_footer_loca.png';
import MyPage from '../../assets/icons/icon_footer_mypage.png';
import Share from '../../assets/icons/icon_footer_share.png';

export const MenuBar = () => {
  return (
    <FooterContainer>
      <List>
        <ListItem Home={Home}>
          <Link2 href="/">홈</Link2>
        </ListItem>
        <ListItem Food={Food}>
          <Link2 href="/">점메추</Link2>
        </ListItem>
        <ListItem Loca={Loca}>
          <Link2 href="/">지도검색</Link2>
        </ListItem>
        <ListItem MyPage={MyPage}>
          <Link2 href="/">마이홈</Link2>
        </ListItem>
        <ListItem Share={Share}>
          <Link2 href="/">공유</Link2>
        </ListItem>
      </List>
    </FooterContainer>
  );
};
