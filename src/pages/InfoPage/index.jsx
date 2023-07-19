import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import ArticleItem from '../../components/ArticleItem';
import { InfoContainer, SearchSection, ArticleList } from './style';

function InfoPage() {
  const navigate = useNavigate();
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

  const clickInfo = (infoId) => {
    navigate(`/info/${infoId}`);
  };

  return (
    <InfoContainer>
      <Header pageTitle={'정보게시판'} />
      <SearchSection>
        <SearchBar placeholder={'검색어를 입력해주세요.'} />
      </SearchSection>
      <ArticleList>
        {InfoData &&
          InfoData.map((info) => (
            <ArticleItem
              key={info.id}
              title={info.title}
              createdAt={info.createdAt}
              views={info.views}
              onClick={() => clickInfo(info.id)}
            />
          ))}
      </ArticleList>
    </InfoContainer>
  );
}

export default InfoPage;
