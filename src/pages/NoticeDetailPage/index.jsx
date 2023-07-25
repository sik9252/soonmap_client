import React, { useState } from 'react';
import { NoticeDetailContainer } from './style';
import Header from '../../components/Header';
import ArticleDetail from '../../components/ArticleDetail';

function NoticeDetailPage() {
  const [notice, setNotice] = useState({
    id: 1,
    title: '공지사항1',
    content: '공지사항1 내용',
    createdAt: '2023.07.12',
    views: 22,
  });

  return (
    <NoticeDetailContainer>
      <Header pageTitle={'공지사항'} />
      <ArticleDetail title={notice.title} content={notice.content} createdAt={notice.createdAt} views={notice.views} />
    </NoticeDetailContainer>
  );
}

export default NoticeDetailPage;
