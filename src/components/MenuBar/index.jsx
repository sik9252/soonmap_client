import React from 'react';
import { FooterContainer, List, ListItem, Link2 } from './style';

export const MenuBar = () => {
  return (
    <FooterContainer>
      <List>
        <ListItem>
          <Link2 href="/">홈</Link2>
        </ListItem>
        <ListItem>
          <Link2 href="/">점메추</Link2>
        </ListItem>
        <ListItem>
          <Link2 href="/">지도검색</Link2>
        </ListItem>
        <ListItem>
          <Link2 href="/">마이홈</Link2>
        </ListItem>
        <ListItem>
          <Link2 href="/">공유</Link2>
        </ListItem>
      </List>
    </FooterContainer>
  );
};
