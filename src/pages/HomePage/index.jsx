import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { InfoCard } from '../../components/Card';
import { NoticeSlider, AdSlider } from '../../components/Sliders';
import { HomeContainer, SubTitle, NoticeSection, AdSection, InfoSection, InfoList } from './style';
import backgroundImage from '../../assets/images/NoticeBg.png';
import { ReactComponent as MoreBtn } from '../../assets/icons/MoreBtn.svg';
import AdImg_1 from '../../assets/images/Ad1.png';
import AdImg_2 from '../../assets/images/Ad2.jpg';
import AdImg_3 from '../../assets/images/Ad3.jpg';
import { useGetMainNoticeRequest, useGetMainInfoRequest } from '../../api/Main';
import toast from 'react-hot-toast';

function Home() {
  const navigate = useNavigate();

  const [noticeData, setNoticeData] = useState([]);
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
  const [infoData, setInfoData] = useState([]);

  const { data: mainNoticeResult, isError: mainNoticeError } = useGetMainNoticeRequest();
  const { data: mainInfoResult, isError: mainInfoError } = useGetMainInfoRequest();

  useEffect(() => {
    if (mainNoticeResult) {
      setNoticeData(mainNoticeResult.data);
    } else if (mainNoticeError) {
      toast.error('공지사항을 불러오는데 실패했습니다.');
    }
  }, [mainNoticeResult, mainNoticeError]);

  useEffect(() => {
    if (mainInfoResult) {
      setInfoData(mainInfoResult.data);
    } else if (mainInfoError) {
      toast.error('정보글을 불러오는데 실패했습니다.');
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
