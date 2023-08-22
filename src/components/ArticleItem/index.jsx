import React from 'react';
import { ReactComponent as TopNotice } from '../../assets/icons/TopNotice.svg';
import { ArticleItemContainer, ArticleTitleSection, SvgBox, ArticleInfoSection } from './style';

function ArticleItem({ isTop, writer, title, createAt, view, onClick }) {
  return (
    <ArticleItemContainer onClick={onClick}>
      <ArticleTitleSection $isTop={isTop}>
        {isTop ? (
          <SvgBox>
            <TopNotice />
          </SvgBox>
        ) : null}
        <span>{title}</span>
      </ArticleTitleSection>
      <ArticleInfoSection>
        <div>작성자 · {writer}</div>
        <div>작성일 · {createAt.slice(0, 10)}</div>
        <div>조회 · {view}</div>
      </ArticleInfoSection>
    </ArticleItemContainer>
  );
}

export default ArticleItem;
