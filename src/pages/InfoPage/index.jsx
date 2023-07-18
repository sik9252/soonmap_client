import React, { useState } from 'react';
import Header from '../../components/Header';
import ArticleItem from '../../components/ArticleItem';
import { InfoContainer, SearchSection, ArticleList } from './style';

function InfoPage() {
  const [InfoData, setInfoData] = useState([
    {
      id: 1,
      title: '정보 게시판1',
      content: '정보 게시판1 내용',
      createdAt: '2023.07.12',
      views: 22,
    },
    {
      id: 2,
      title: '정보 게시판2',
      content: '정보 게시판2 내용',
      createdAt: '2023.07.12',
      views: 22,
    },
    {
      id: 3,
      title: '정보 게시판3',
      content: '정보 게시판3 내용',
      isTop: false,
      createdAt: '2023.07.12',
      views: 22,
    },
    {
      id: 4,
      title: '정보 게시판4',
      content: '정보 게시판4 내용',
      isTop: false,
      createdAt: '2023.07.12',
      views: 22,
    },
    {
      id: 5,
      title: '정보 게시판5',
      content: '정보 게시판5 내용',
      isTop: false,
      createdAt: '2023.07.12',
      views: 22,
    },
  ]);

  return (
    <InfoContainer>
      <Header pageTitle={'정보게시판'} />
      <SearchSection>검색바가 들어갈 구역</SearchSection>
      <ArticleList>
        {InfoData &&
          InfoData.map((Info) => (
            <ArticleItem
              key={Info.id}
              isTop={Info.isTop}
              title={Info.title}
              createdAt={Info.createdAt}
              views={Info.views}
            />
          ))}
      </ArticleList>
    </InfoContainer>
  );
}

export default InfoPage;
