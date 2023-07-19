import React from 'react';
import { ArticleDetailContainer, ArticleTitleSection, ArticleInfoSection, ArticleContentSection } from './style';

function ArticleDetail({ title, content, createdAt, views }) {
  return (
    <ArticleDetailContainer>
      <ArticleTitleSection>
        <div>{title}</div>
      </ArticleTitleSection>
      <ArticleInfoSection>
        <div>작성일 · {createdAt}</div>
        <div>조회 · {views}</div>
      </ArticleInfoSection>
      <ArticleContentSection>{content}</ArticleContentSection>
    </ArticleDetailContainer>
  );
}

export default ArticleDetail;
