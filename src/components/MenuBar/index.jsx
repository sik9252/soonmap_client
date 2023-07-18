import React from 'react';
import { FooterContainer, List, ListItem, Link2 } from './style';
import Home from '../../assets/icons/icon_footer_home.png';
import Food from '../../assets/icons/icon_footer_food.png';
import Map from '../../assets/icons/icon_footer_loca.png';
import MyPage from '../../assets/icons/icon_footer_mypage.png';
import Share from '../../assets/icons/icon_footer_share.png';

export const MenuBar = () => {
  return (
    <FooterContainer>
      <List>
        <ListItem $home={Home}>
          <Link2 href="/">홈</Link2>
        </ListItem>
        <ListItem $food={Food}>
          <Link2 href="/">점메추</Link2>
        </ListItem>
        <ListItem $map={Map}>
          <Link2 href="/">지도검색</Link2>
        </ListItem>
        <ListItem $myPage={MyPage}>
          <Link2 href="/">마이홈</Link2>
        </ListItem>
        <ListItem $share={Share}>
          <Link2 href="/">공유</Link2>
        </ListItem>
      </List>
    </FooterContainer>
  );
};
