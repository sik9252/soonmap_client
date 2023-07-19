import React from 'react';
import { SearchBox, InputBox, Input } from './style';
import SearchBtn from '../../assets/icons/SearchBtn.svg';

const SearchBar = ({ placeholder }) => {
  return (
    <SearchBox>
      <form>
        <InputBox>
          <Input type="text" placeholder={placeholder} $searchBtn={SearchBtn} />
        </InputBox>
      </form>
    </SearchBox>
  );
};

export default SearchBar;
