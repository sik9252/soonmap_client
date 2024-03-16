import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Header from '../../components/Header';
import FindId from './FindId';
import { FindAccountContainer } from './style';
import FindPassword from './FindPassword';

function FindAccount() {
  const MENU = [
    {
      id: 1,
      tabName: '아이디 찾기',
    },
    {
      id: 2,
      tabName: '비밀번호 재발급',
    },
  ];

  const SCREEN = [
    {
      id: 1,
      screen: <FindId />,
    },
    {
      id: 1,
      screen: <FindPassword />,
    },
  ];

  return (
    <FindAccountContainer>
      <Header pageTitle="계정찾기" />
      <Tabs variant="soft-rounded" colorScheme="blue" mt="20px">
        <TabList>
          {MENU.map((menu) => (
            <Tab key={menu.id}>{menu.tabName}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {SCREEN.map((screen) => (
            <TabPanel key={screen.id}>{screen.screen}</TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </FindAccountContainer>
  );
}

export default FindAccount;
