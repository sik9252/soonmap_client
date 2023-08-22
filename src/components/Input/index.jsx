import React from 'react';
import { StyledSquareInput } from './style';

export const SquareInput = ({ ref, width, height, placeholder, onChange, value, defaultValue, type }) => {
  return (
    <StyledSquareInput
      ref={ref}
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
