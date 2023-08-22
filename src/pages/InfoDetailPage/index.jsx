import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { InfoDetailContainer } from './style';
import Header from '../../components/Header';
import ArticleDetail from '../../components/ArticleDetail';
import { useGetInfoDetailRequest } from '../../api/Info';
import toast from 'react-hot-toast';

function InfoDetailPage() {
  const location = useParams();

  const [info, setInfo] = useState({});

  const { data: infoDetailResult, isError: infoDetailError } = useGetInfoDetailRequest({ id: location.id });

  useEffect(() => {
    if (infoDetailResult) {
      setInfo(infoDetailResult.data);
    } else if (infoDetailError) {
      toast.error('게시글을 불러오는데 실패했습니다.');
    }
  }, [infoDetailResult, infoDetailError]);

  return (
    <InfoDetailContainer>
      <Header pageTitle={'정보 게시판'} />
      <ArticleDetail
        title={info.title}
        writer={info.writer}
        content={info.content}
        createAt={info.createAt}
        view={info.view}
      />
    </InfoDetailContainer>
  );
}

export default InfoDetailPage;
