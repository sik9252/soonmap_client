import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InfoCard } from '../../components/Card';
import { NoticeSlider, AdSlider } from '../../components/Sliders';
import { HomeContainer, SubTitle, NoticeBox, AdBox, InfoBox, InfoList } from './style';
import backgroundImage from '../../assets/images/NoticeBg.png';
import { ReactComponent as MoreBtn } from '../../assets/icons/MoreBtn.svg';
import AdImg_1 from '../../assets/images/Ad1.png';
import AdImg_2 from '../../assets/images/Ad2.jpg';
import AdImg_3 from '../../assets/images/Ad3.jpg';

function Home() {
  const navigate = useNavigate();

  const [noticeData, setNoticeData] = useState([
    {
      id: 1,
      author: '작성자1',
      createdAt: '2023.07.11',
      title: '공지사항 제목1',
    },
    {
      id: 2,
      author: '작성자2',
      createdAt: '2023.07.11',
      title: '공지사항 제목2',
    },
    {
      id: 3,
      author: '작성자3',
      createdAt: '2023.07.11',
      title: '공지사항 제목3',
    },
  ]);

  const [adData, setAdData] = useState([
    {
      id: 1,
      image: AdImg_1,
    },
    {
      id: 2,
      image: AdImg_2,
    },
    {
      id: 3,
      image: AdImg_3,
    },
  ]);

  const [infoData, setInfoData] = useState([
    {
      id: 1,
      thumbnail: AdImg_2,
      title: '제목 3줄 넘어가면 생략되나?제목 3줄 넘어가면 생략되나?제목 3줄 넘어가면 생략되나?',
      views: '230',
    },
    {
      id: 2,
      thumbnail: AdImg_2,
      title: '정보 제목 2',
      views: '123',
    },
    {
      id: 3,
      thumbnail: AdImg_2,
      title: '정보 제목 3',
      views: '9',
    },
    {
      id: 4,
      thumbnail: AdImg_2,
      title: '정보 제목 4',
      views: '80',
    },
    {
      id: 5,
      thumbnail: AdImg_2,
      title: '정보 제목 5',
      views: '1432',
    },
  ]);

  const clickShowMoreNotice = () => {
    navigate('/notice');
  };

  const clickInfo = (infoId) => {
    navigate(`/info/${infoId}`);
  };

  const clickShowMoreInfo = () => {
    navigate('/info');
  };

  return (
    <HomeContainer>
      <NoticeBox $bgImg={backgroundImage}>
        <div>
          <SubTitle>공지사항</SubTitle>
          <MoreBtn onClick={() => clickShowMoreNotice()} />
        </div>
        <NoticeSlider noticeData={noticeData} />
      </NoticeBox>
      <AdBox>
        <AdSlider adData={adData} />
      </AdBox>
      <InfoBox>
        <div>
          <SubTitle>정보게시판</SubTitle>
          <MoreBtn onClick={() => clickShowMoreInfo()} />
        </div>
        <InfoList>
          {infoData &&
            infoData.map((info) => (
              <InfoCard
                key={info.id}
                thumbnail={info.thumbnail}
                title={info.title}
                views={info.views}
                onClick={() => clickInfo(info.id)}
              />
            ))}
        </InfoList>
      </InfoBox>
    </HomeContainer>
  );
}

export default Home;
