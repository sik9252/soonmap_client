import React from 'react';
import { InputBox, Input } from './style';
import SearchBtn from '../../assets/icons/SearchBtn.svg';

const SearchBar = ({ placeholder }) => {
  return (
    <form>
      <InputBox>
        <Input type="text" placeholder={placeholder} $searchBtn={SearchBtn} />
      </InputBox>
    </form>
  );
};

export default SearchBar;
