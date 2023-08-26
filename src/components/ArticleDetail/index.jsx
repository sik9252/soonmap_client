import React from 'react';
import {
  ArticleDetailContainer,
  ArticleTitleSection,
  SvgBox,
  ArticleInfoSection,
  ArticleContentSection,
} from './style';
import { ReactComponent as TopNotice } from '../../assets/icons/TopNotice.svg';
import TextViewer from '../TextViewer';

function ArticleDetail({ writer, category, isTop, title, content, createAt, view }) {
  return (
    <ArticleDetailContainer>
      <ArticleTitleSection $isTop={isTop}>
        {isTop ? (
          <SvgBox>
            <TopNotice />
          </SvgBox>
        ) : null}
        <span>
          {category ? `[${category}]` : ''} {title}
        </span>
      </ArticleTitleSection>
      <ArticleInfoSection>
        <div>작성자 · {writer}</div>
        <div>작성일 · {createAt?.slice(0, 10)}</div>
        <div>조회 · {view}</div>
      </ArticleInfoSection>
      <ArticleContentSection>
        <TextViewer content={content} />
      </ArticleContentSection>
    </ArticleDetailContainer>
  );
}

export default ArticleDetail;
