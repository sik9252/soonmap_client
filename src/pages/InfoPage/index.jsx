import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import ArticleItem from '../../components/ArticleItem';
import Pagination from '../../components/Pagination';
import { ReactComponent as PagePrevBtn } from '../../assets/icons/PagePrevBtn.svg';
import { ReactComponent as PageNextBtn } from '../../assets/icons/PageNextBtn.svg';
import { InfoContainer, SearchSection, ArticleList, PageNationSection, HiddenBtn } from './style';

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

  const [currentPage, setCurrentPage] = useState(1);
  const [isFirstPage, setIsFirstPage] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);

  // 테스트용 총 페이지 수
  const totalPosts = 36;
  const postPerPages = 5;

  const clickPagePrevBtn = (e) => {
    if (currentPage === 1) {
      e.preventDefault();
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const clickPageNextBtn = (e) => {
    if (currentPage === Math.ceil(totalPosts / postPerPages)) {
      e.preventDefault();
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    if (currentPage === 1) {
      setIsFirstPage(true);
    } else {
      setIsFirstPage(false);
    }

    if (currentPage === Math.ceil(totalPosts / postPerPages)) {
      setIsLastPage(true);
    } else {
      setIsLastPage(false);
    }
  }, [currentPage]);

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
      <PageNationSection>
        {isFirstPage ? <HiddenBtn /> : <PagePrevBtn onClick={(e) => clickPagePrevBtn(e)} />}
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPosts={totalPosts}
          postPerPages={postPerPages}
        />
        {isLastPage ? <HiddenBtn /> : <PageNextBtn onClick={(e) => clickPageNextBtn(e)} />}
      </PageNationSection>
    </InfoContainer>
  );
}

export default InfoPage;
