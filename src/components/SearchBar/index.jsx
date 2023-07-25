import React from 'react';
import { InputBox, Input } from './style';
import SearchBtn from '../../assets/icons/SearchBtn.svg';

const SearchBar = ({ placeholder }) => {
  return (
    <InputBox>
      <Input type="text" placeholder={placeholder} $searchBtn={SearchBtn} />
    </InputBox>
  );
};

export default SearchBar;
