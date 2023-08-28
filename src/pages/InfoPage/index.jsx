import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import ArticleItem from '../../components/ArticleItem';
import Pagination from '../../components/Pagination';
import { InfoContainer, SearchSection, ArticleList, ArticleNotFound } from './style';
import { useGetInfoRequest, useGetCategoryRequest } from '../../api/Info';
import { Select } from '@chakra-ui/react';

function InfoPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('user-accessToken') || !localStorage.getItem('user-refreshToken')) {
      alert('로그인 후 사용가능합니다.');
      navigate('/my');
    }
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(1);
  const [keyword, setKeyword] = useState('');
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const {
    data: infoResult,
    isError: infoError,
    refetch: infoRefetch,
  } = useGetInfoRequest({ page: currentPage - 1, title: keyword, type: selectedCategory }, false);

  const { data: categoryResult, isError: categoryError } = useGetCategoryRequest();

  const [InfoData, setInfoData] = useState([]);

  useEffect(() => {
    infoRefetch();
  }, [currentPage, selectedCategory]);

  useEffect(() => {
    if (infoResult) {
      setInfoData(infoResult.data.articleList);
      setTotalPosts(infoResult.data.totalPage);
    } else if (infoError) {
      alert('정보글을 불러오는데 실패했습니다.');
    }
  }, [infoResult, infoError]);

  useEffect(() => {
    if (categoryResult) {
      setCategoryList(categoryResult.data);
    } else if (categoryError) {
      alert('카테고리 목록을 불러오는데 실패했습니다.');
    }
  }, [categoryResult, categoryError]);

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

  const handleCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <InfoContainer>
      <Header pageTitle={'정보게시판'} />
      <SearchSection>
        <SearchBar placeholder={'검색어를 입력해주세요.'} onChange={handleKeyword} onKeyDown={handleOnEnterKeyDown} />
        <Select
          placeholder="필터링할 카테고리를 선택하세요."
          mt="10px"
          boxShadow="1px 1px 4px 0px rgba(0, 0, 0, 0.25)"
          border="none"
          borderRadius="64px"
          backgroundColor="#fff"
          fontSize="14px"
          color="#777"
          onChange={handleCategory}
        >
          {categoryList &&
            categoryList.map((category) => (
              <option key={category.id} value={category.typeName}>
                {category.typeName}
              </option>
            ))}
        </Select>
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
