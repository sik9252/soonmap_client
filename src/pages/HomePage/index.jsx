import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { InfoCard } from '../../components/Card';
import { NoticeSlider, AdSlider } from '../../components/Sliders';
import { HomeContainer, SubTitle, NoticeSection, AdSection, InfoSection, InfoList } from './style';
import backgroundImage from '../../assets/images/NoticeBg.png';
import { ReactComponent as MoreBtn } from '../../assets/icons/MoreBtn.svg';
import RecruitAdImage from '../../assets/images/advertise.png';
import { useGetMainNoticeRequest, useGetMainInfoRequest } from '../../api/Main';

function Home() {
  const navigate = useNavigate();

  const [noticeData, setNoticeData] = useState([]);
  const [adData, setAdData] = useState([
    {
      id: 1,
      image: RecruitAdImage,
      url: 'https://forms.gle/eojFpQw1CUNS8YCW8',
    },
    {
      id: 2,
      image: RecruitAdImage,
      url: 'https://forms.gle/eojFpQw1CUNS8YCW8',
    },
    {
      id: 3,
      image: RecruitAdImage,
      url: 'https://forms.gle/eojFpQw1CUNS8YCW8',
    },
  ]);
  const [infoData, setInfoData] = useState([]);

  const { data: mainNoticeResult, isError: mainNoticeError } = useGetMainNoticeRequest();
  const { data: mainInfoResult, isError: mainInfoError } = useGetMainInfoRequest();

  useEffect(() => {
    if (mainNoticeResult) {
      setNoticeData(mainNoticeResult.data);
    } else if (mainNoticeError) {
      alert('공지사항을 불러오는데 실패했습니다.');
    }
  }, [mainNoticeResult, mainNoticeError]);

  useEffect(() => {
    if (mainInfoResult) {
      setInfoData(mainInfoResult.data);
    } else if (mainInfoError) {
      alert('정보글을 불러오는데 실패했습니다.');
    }
  }, [mainInfoResult, mainInfoError]);

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
      <NoticeSection $bgImg={backgroundImage}>
        <div>
          <SubTitle onClick={() => clickShowMoreNotice()}>공지사항</SubTitle>
          <MoreBtn onClick={() => clickShowMoreNotice()} />
        </div>
        <NoticeSlider noticeData={noticeData} />
      </NoticeSection>
      <AdSection>
        <AdSlider adData={adData} />
      </AdSection>
      <InfoSection>
        <div>
          <SubTitle onClick={() => clickShowMoreInfo()}>정보게시판</SubTitle>
          <MoreBtn onClick={() => clickShowMoreInfo()} />
        </div>
        <InfoList>
          {infoData &&
            infoData.map((info) => (
              <InfoCard
                key={info.id}
                category={info.articleTypeName}
                thumbnail={info.thumbnail}
                title={info.title}
                view={info.view}
                onClick={() => clickInfo(info.id)}
              />
            ))}
        </InfoList>
      </InfoSection>
    </HomeContainer>
  );
}

export default Home;
