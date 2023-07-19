import React from 'react';
import { ReactComponent as TopNotice } from '../../assets/icons/TopNotice.svg';
import { ArticleItemContainer, ArticleTitleSection, ArticleInfoSection } from './style';

function ArticleItem({ isTop, title, createdAt, views, onClick }) {
  return (
    <ArticleItemContainer onClick={onClick}>
      <ArticleTitleSection isTop={isTop}>
        {isTop ? <TopNotice /> : null}
        <span>{title}</span>
      </ArticleTitleSection>
      <ArticleInfoSection>
        <div>작성일 · {createdAt}</div>
        <div>조회 · {views}</div>
      </ArticleInfoSection>
    </ArticleItemContainer>
  );
}

export default ArticleItem;
