import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NoticeSliderStyle, AdSliderStyle } from './style';
import { SplideSlide } from '@splidejs/react-splide';
import Slider from '../Slider';

export const NoticeSlider = ({ noticeData }) => {
  const navigate = useNavigate();

  const clickNotice = (noticeId) => {
    navigate(`/notice/${noticeId}`);
  };

  return (
    <NoticeSliderStyle>
      <Slider
        options={{
          type: 'loop',
          drag: true,
          autoplay: true,
          interval: 3000,
          arrows: false,
        }}
      >
        {noticeData &&
          noticeData.map((notice) => (
            <SplideSlide key={notice.id} onClick={() => clickNotice(notice.id)}>
              <div>
                <div>{notice.writer}</div>
                <div>·</div>
                <div> {notice.createAt?.slice(0, 10)}</div>
              </div>
              <div>{notice.title}</div>
            </SplideSlide>
          ))}
      </Slider>
    </NoticeSliderStyle>
  );
};

export const AdSlider = ({ adData }) => {
  return (
    <AdSliderStyle>
      <Slider
        options={{
          type: 'loop',
          drag: true,
          autoplay: true,
          interval: 2000,
          arrows: false,
          pagination: false,
        }}
      >
        {adData &&
          adData.map((ad) => (
            <SplideSlide key={ad.id}>
              <img src={ad.image} alt="광고" />
            </SplideSlide>
          ))}
      </Slider>
    </AdSliderStyle>
  );
};
