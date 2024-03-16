import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import ArticleItem from '../../components/ArticleItem';
import Pagination from '../../components/Pagination';
import { NoticeContainer, SearchSection, ArticleList, ArticleNotFound } from './style';
import { useGetNoticeRequest, useGetTopNoticeRequest } from '../../api/Notice';

function NoticePage() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(1);
  const [keyword, setKeyword] = useState('');

  const { data: topNoticeResult, isError: topNoticeError } = useGetTopNoticeRequest();

  const {
    data: noticeResult,
    isError: noticeError,
    refetch: noticeRefetch,
  } = useGetNoticeRequest({ page: currentPage - 1, title: keyword }, false);

  const [noticeData, setNoticeData] = useState([]);
  const [topNoticeData, setTopNoticeData] = useState([]);

  useEffect(() => {
    noticeRefetch();
  }, [currentPage]);

  useEffect(() => {
    if (noticeResult) {
      setNoticeData(noticeResult.data.noticeList);
      setTotalPosts(noticeResult.data.totalPage);
    } else if (noticeError) {
      alert('공지사항을 불러오는데 실패했습니다.');
    }
  }, [noticeResult, noticeError]);

  useEffect(() => {
    if (topNoticeResult) {
      setTopNoticeData(topNoticeResult.data);
    } else if (topNoticeError) {
      alert('공지사항을 불러오는데 실패했습니다.');
    }
  }, [topNoticeResult, topNoticeError]);

  const clickNotice = (noticeId) => {
    navigate(`/notice/${noticeId}`);
  };

  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const handleOnEnterKeyDown = (e) => {
    if (e.key === 'Enter') {
      noticeRefetch();
    }
  };

  return (
    <NoticeContainer>
      <Header pageTitle={'공지사항'} />
      <SearchSection>
        <SearchBar placeholder={'검색어를 입력해주세요.'} onChange={handleKeyword} onKeyDown={handleOnEnterKeyDown} />
      </SearchSection>
      <ArticleList>
        {topNoticeData &&
          topNoticeData.map((notice) => (
            <ArticleItem
              key={notice.id}
              isTop={notice.top}
              writer={notice.writer}
              title={notice.title}
              createAt={notice.createAt}
              view={notice.view}
              onClick={() => clickNotice(notice.id)}
            />
          ))}
        {noticeData && noticeData.length > 0 ? (
          <>
            {noticeData.map((notice) => (
              <ArticleItem
                key={notice.id}
                isTop={notice.top}
                writer={notice.writer}
                title={notice.title}
                createAt={notice.createAt}
                view={notice.view}
                onClick={() => clickNotice(notice.id)}
              />
            ))}
          </>
        ) : (
          <ArticleNotFound>게시글이 없습니다.</ArticleNotFound>
        )}
      </ArticleList>
      <Pagination
        totalPosts={totalPosts * 5}
        postPerPages={5}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </NoticeContainer>
  );
}

export default NoticePage;
