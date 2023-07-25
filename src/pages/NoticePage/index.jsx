import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import ArticleItem from '../../components/ArticleItem';
import Pagination from '../../components/Pagination';
import { NoticeContainer, SearchSection, ArticleList } from './style';

function NoticePage() {
  const navigate = useNavigate();
  const [noticeData, setNoticeData] = useState([
    {
      id: 1,
      title: '공지사항1',
      content: '공지사항1 내용',
      isTop: true,
      createdAt: '2023.07.12',
      views: 22,
    },
    {
      id: 2,
      title: '공지사항2',
      content: '공지사항2 내용',
      isTop: true,
      createdAt: '2023.07.12',
      views: 22,
    },
    {
      id: 3,
      title: '공지사항3',
      content: '공지사항3 내용',
      isTop: false,
      createdAt: '2023.07.12',
      views: 22,
    },
    {
      id: 4,
      title: '공지사항4',
      content: '공지사항4 내용',
      isTop: false,
      createdAt: '2023.07.12',
      views: 22,
    },
    {
      id: 5,
      title: '공지사항5',
      content: '공지사항5 내용',
      isTop: false,
      createdAt: '2023.07.12',
      views: 22,
    },
  ]);

  const clickNotice = (noticeId) => {
    navigate(`/notice/${noticeId}`);
  };

  // 테스트용 총 페이지 수
  const totalPosts = 21;
  const postPerPages = 5;

  return (
    <NoticeContainer>
      <Header pageTitle={'공지사항'} />
      <SearchSection>
        <SearchBar placeholder={'검색어를 입력해주세요.'} />
      </SearchSection>
      <ArticleList>
        {noticeData &&
          noticeData.map((notice) => (
            <ArticleItem
              key={notice.id}
              isTop={notice.isTop}
              title={notice.title}
              createdAt={notice.createdAt}
              views={notice.views}
              onClick={() => clickNotice(notice.id)}
            />
          ))}
      </ArticleList>
      <Pagination totalPosts={totalPosts} postPerPages={postPerPages} />
    </NoticeContainer>
  );
}

export default NoticePage;
