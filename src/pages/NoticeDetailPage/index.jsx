import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NoticeDetailContainer } from './style';
import Header from '../../components/Header';
import ArticleDetail from '../../components/ArticleDetail';
import { useGetNoticeDetailRequest } from '../../api/Notice';
import toast from 'react-hot-toast';

function NoticeDetailPage() {
  const location = useParams();

  const [notice, setNotice] = useState({});

  const { data: noticeDetailResult, isError: noticeDetailError } = useGetNoticeDetailRequest({ id: location.id });

  useEffect(() => {
    if (noticeDetailResult) {
      setNotice(noticeDetailResult.data);
    } else if (noticeDetailError) {
      toast.error('게시글을 불러오는데 실패했습니다.');
    }
  }, [noticeDetailResult, noticeDetailError]);

  return (
    <NoticeDetailContainer>
      <Header pageTitle={'공지사항'} />
      <ArticleDetail
        title={notice.title}
        isTop={notice.top}
        writer={notice.writer}
        content={notice.content}
        createAt={notice.createAt?.slice(0, 10)}
        view={notice.view}
      />
    </NoticeDetailContainer>
  );
}

export default NoticeDetailPage;
