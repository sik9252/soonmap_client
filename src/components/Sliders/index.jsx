import React from 'react';
import { NoticeSliderStyle, AdSliderStyle } from './style';
import { SplideSlide } from '@splidejs/react-splide';
import Slider from '../Slider';
import AdImg_1 from '../../assets/images/Ad1.png';
import AdImg_2 from '../../assets/images/Ad2.jpg';
import AdImg_3 from '../../assets/images/Ad3.jpg';

export const NoticeSlider = ({ noticeData }) => {
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
            <SplideSlide key={notice.id}>
              <div>
                <div>{notice.author}</div>
                <div>·</div>
                <div> {notice.createdAt}</div>
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
