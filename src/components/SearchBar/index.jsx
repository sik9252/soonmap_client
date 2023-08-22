import React from 'react';
import { InputBox, Input } from './style';
import SearchBtn from '../../assets/icons/SearchBtn.svg';

const SearchBar = ({ placeholder, onChange, onKeyDown }) => {
  return (
    <InputBox>
      <Input type="text" placeholder={placeholder} $searchBtn={SearchBtn} onChange={onChange} onKeyDown={onKeyDown} />
    </InputBox>
  );
};

export default SearchBar;
