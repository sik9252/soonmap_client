import React, { useState } from 'react';
import { InfoDetailContainer } from './style';
import Header from '../../components/Header';
import ArticleDetail from '../../components/ArticleDetail';

function InfoDetailPage() {
  const [info, setInfo] = useState({
    id: 1,
    title: '정보 게시판1',
    content: '정보 게시판1 내용',
    createdAt: '2023.07.12',
    views: 22,
  });

  return (
    <InfoDetailContainer>
      <Header pageTitle={'정보 게시판'} />
      <ArticleDetail title={info.title} content={info.content} createdAt={info.createdAt} views={info.views} />
    </InfoDetailContainer>
  );
}

export default InfoDetailPage;
