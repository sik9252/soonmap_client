import React from 'react';
import Card from '../../components/Card';
import Slider from '../../components/Slider';
import { HomeContainer } from './style';

function Home() {
  return (
    <HomeContainer>
      <Slider />
      <Card />
    </HomeContainer>
  );
}

export default Home;
