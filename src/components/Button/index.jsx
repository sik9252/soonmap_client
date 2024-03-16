import React from 'react';
import { StyledButton, StyledCancelButton } from './style';

export const Button = ({ children, width, height, onClick, bgColor, disabled }) => {
  return (
    <StyledButton
      $width={width}
      $height={height}
      $bgColor={bgColor}
      onClick={onClick}
      $disabled={disabled}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export const CancelButton = ({ children, width, height, onClick, bgColor }) => {
  return (
    <StyledCancelButton $width={width} $height={height} $bgColor={bgColor} onClick={onClick}>
      {children}
    </StyledCancelButton>
  );
};
