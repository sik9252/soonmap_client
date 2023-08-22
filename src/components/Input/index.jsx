import React from 'react';
import { StyledSquareInput } from './style';

export const SquareInput = ({ width, height, placeholder, onChange, value, defaultValue, type }) => {
  return (
    <StyledSquareInput
      width={width}
      height={height}
      placeholder={placeholder}
      onChange={onChange}
      defaultValue={defaultValue}
      value={value}
      type={type ? type : 'text'}
    />
  );
};
