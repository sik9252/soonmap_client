import React from 'react';
import { NotFoundPageContainer, ErrorCodeSection, ErrorTextSection } from './style';

function NotFoundPage() {
  return (
    <NotFoundPageContainer>
      <ErrorCodeSection>404</ErrorCodeSection>
      <ErrorTextSection>존재하지 않는 페이지입니다.</ErrorTextSection>
    </NotFoundPageContainer>
  );
}

export default NotFoundPage;
