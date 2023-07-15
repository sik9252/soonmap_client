import React from 'react';
import { NoticeSliderStyle } from './style';
import { SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Slider from '../Slider';

export const NoticeSlider = ({ author, createdAt, title }) => {
  return (
    <NoticeSliderStyle>
      <Slider>
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
  return <div>AdSlider</div>;
};
