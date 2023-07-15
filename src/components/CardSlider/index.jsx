import React from 'react';
import { NoticeSliderStyle, AdSliderStyle } from './style';
import { SplideSlide } from '@splidejs/react-splide';
import Slider from '../Slider';
import AdImg_1 from '../../assets/Ad1.png';
import AdImg_2 from '../../assets/Ad2.jpg';
import AdImg_3 from '../../assets/Ad3.jpg';

export const NoticeSlider = ({ author, createdAt, title }) => {
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
        <SplideSlide>
          <div>
            <div>{author}</div>
            <div>·</div>
            <div> {createdAt}</div>
          </div>
          <div>{title}</div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <div>{author}</div>
            <div>·</div>
            <div> {createdAt}</div>
          </div>
          <div>{title}</div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <div>{author}</div>
            <div>·</div>
            <div> {createdAt}</div>
          </div>
          <div>{title}</div>
        </SplideSlide>
      </Slider>
    </NoticeSliderStyle>
  );
};

export const AdSlider = () => {
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
        <SplideSlide>
          <img src={AdImg_1} alt="광고" />
        </SplideSlide>
        <SplideSlide>
          <img src={AdImg_2} alt="광고" />
        </SplideSlide>
        <SplideSlide>
          <img src={AdImg_3} alt="광고" />
        </SplideSlide>
      </Slider>
    </AdSliderStyle>
  );
};
