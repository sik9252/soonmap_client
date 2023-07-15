import React from 'react';
import InfoCard from '../../components/Card';
import { NoticeSlider, AdSlider } from '../../components/CardSlider';
import { HomeContainer, NoticeBox, AdBox, InfoBox, SubTitle } from './style';
import backgroundImg from '../../assets/images/NoticeBg.png';

function Home() {
  return (
    <HomeContainer>
      <NoticeBox $bgImg={backgroundImg}>
        <SubTitle>공지사항</SubTitle>
        <NoticeSlider
          author={'작성자'}
          createdAt={'2023.07.11'}
          title={'공지사항 제목이 들어갑니다. 공지사항 제목이!! 공공공공공'}
        />
      </NoticeBox>
      <AdBox>
        <AdSlider />
      </AdBox>
      <InfoBox>
        <div>
          <SubTitle>정보게시판</SubTitle>
        </div>

        <InfoCard />
      </InfoBox>
    </HomeContainer>
  );
}

export default Home;
