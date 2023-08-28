import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { InfoDetailContainer } from './style';
import Header from '../../components/Header';
import ArticleDetail from '../../components/ArticleDetail';
import { useGetInfoDetailRequest } from '../../api/Info';

function InfoDetailPage() {
  const location = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('user-accessToken') || !localStorage.getItem('user-refreshToken')) {
      alert('로그인 후 사용가능합니다.');
      navigate('/my');
    }
  }, []);

  const [info, setInfo] = useState({});
  const { data: infoDetailResult, isError: infoDetailError } = useGetInfoDetailRequest({ id: location.id });

  useEffect(() => {
    if (infoDetailResult) {
      setInfo(infoDetailResult.data);
    } else if (infoDetailError) {
      if (infoDetailError.status === 401) {
        alert('로그인 후 사용가능합니다.');
        navigate('/my');
      } else {
        alert('게시글을 불러오는데 실패했습니다.');
      }
    }
  }, [infoDetailResult, infoDetailError]);

  return (
    <InfoDetailContainer>
      <Header pageTitle={'정보 게시판'} />
      <ArticleDetail
        title={info.title}
        writer={info.writer}
        thumbnail={info.thumbnail}
        category={info.articleTypeName}
        content={info.content}
        createAt={info.createAt}
        view={info.view}
      />
    </InfoDetailContainer>
  );
}

export default InfoDetailPage;
