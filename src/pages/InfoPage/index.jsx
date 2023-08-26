import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import ArticleItem from '../../components/ArticleItem';
import Pagination from '../../components/Pagination';
import { InfoContainer, SearchSection, ArticleList, ArticleNotFound } from './style';
import { useGetInfoRequest } from '../../api/Info';

function InfoPage() {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(1);
  const [keyword, setKeyword] = useState('');

  const {
    data: infoResult,
    isError: infoError,
    refetch: infoRefetch,
  } = useGetInfoRequest({ page: currentPage - 1, title: keyword }, false);

  const [InfoData, setInfoData] = useState([]);

  useEffect(() => {
    infoRefetch();
  }, [currentPage]);

  useEffect(() => {
    if (infoResult) {
      console.log(infoResult);
      setInfoData(infoResult.data.articleList);
      setTotalPosts(infoResult.data.totalPage);
    } else if (infoError) {
      alert('정보글을 불러오는데 실패했습니다.');
    }
  }, [infoResult, infoError]);

  const clickInfo = (infoId) => {
    navigate(`/info/${infoId}`);
  };

  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const handleOnEnterKeyDown = (e) => {
    if (e.key === 'Enter') {
      infoRefetch();
    }
  };

  return (
    <InfoContainer>
      <Header pageTitle={'정보게시판'} />
      <SearchSection>
        <SearchBar placeholder={'검색어를 입력해주세요.'} onChange={handleKeyword} onKeyDown={handleOnEnterKeyDown} />
      </SearchSection>
      <ArticleList>
        {InfoData && InfoData.length > 0 ? (
          <>
            {InfoData.map((info) => (
              <ArticleItem
                key={info.id}
                location="정보"
                thumbnail={info.thumbnail}
                writer={info.writer}
                category={info.articleTypeName}
                title={info.title}
                createAt={info.createAt}
                view={info.view}
                onClick={() => clickInfo(info.id)}
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
    </InfoContainer>
  );
}

export default InfoPage;
