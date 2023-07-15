import React from 'react';
import { Splide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

function Slider({ children }) {
  return (
    <Splide
      options={{
        type: 'loop',
        drag: true,
        autoplay: true,
        interval: 3000,
        arrows: false,
      }}
    >
      {children}
    </Splide>
  );
}

export default Slider;
