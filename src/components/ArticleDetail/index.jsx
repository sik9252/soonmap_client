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
import { Flex, Image } from '@chakra-ui/react';

function ArticleDetail({ writer, thumbnail, category, isTop, title, content, createAt, view }) {
  return (
    <ArticleDetailContainer>
      <ArticleTitleSection $isTop={isTop}>
        {isTop ? (
          <SvgBox>
            <TopNotice />
          </SvgBox>
        ) : null}
        {thumbnail ? (
          <Flex alignItems="center">
            <Image src={thumbnail} mr="10px" width="35px" />
            {category ? `[${category}]` : ''} {title}
          </Flex>
        ) : (
          <Flex>
            {category ? `[${category}]` : ''} {title}
          </Flex>
        )}
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
