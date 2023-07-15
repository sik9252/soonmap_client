import React from 'react';
import { Splide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

function Slider({ children, options }) {
  return <Splide options={options}>{children}</Splide>;
}

export default Slider;
