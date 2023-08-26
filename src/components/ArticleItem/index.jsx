import React from 'react';
import { ReactComponent as TopNotice } from '../../assets/icons/TopNotice.svg';
import { ArticleItemContainer, ArticleTitleSection, SvgBox, ArticleInfoSection } from './style';
import { Image, Flex, Box } from '@chakra-ui/react';
import DefaultThumbnail from '/soonmap.png';

function ArticleItem({ location, isTop, writer, thumbnail, category, title, createAt, view, onClick }) {
  return (
    <ArticleItemContainer onClick={onClick}>
      <Flex>
        {location === '정보' ? <Image src={thumbnail ? thumbnail : DefaultThumbnail} w="45px" mr="10px" /> : ''}
        <Box>
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
            <div>작성일 · {createAt.slice(0, 10)}</div>
            <div>조회 · {view}</div>
          </ArticleInfoSection>
        </Box>
      </Flex>
    </ArticleItemContainer>
  );
}

export default ArticleItem;
