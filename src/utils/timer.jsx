import React from 'react';
import Countdown from 'react-countdown';
import { Box } from '@chakra-ui/react';

const Timer = ({ isStart, setTimeUp }) => {
  const padZero = (value) => {
    return String(value).padStart(2, '0');
  };

  const onTimerComplete = () => {
    setTimeUp(true);
  };

  const renderer = ({ minutes, seconds }) => {
    return (
      <div>
        {padZero(minutes)}:{padZero(seconds)}
      </div>
    );
  };

  return (
    <Box color="#dc143c">
      {isStart && (
        <Countdown key={Date.now()} date={Date.now() + 180 * 1000} renderer={renderer} onComplete={onTimerComplete} />
      )}
    </Box>
  );
};

export default Timer;
