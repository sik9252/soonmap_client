import React, { useState } from 'react';
import Select from 'react-select';
import { customStyles } from './style';
import SelectArrowIcon from '../../assets/icons/SelectBtn.svg';

const SelectBar = ({ options, selectedFloor, setSelectedFloor }) => {
  return (
    <Select
      placeholder={options[0].value}
      value={selectedFloor}
      onChange={setSelectedFloor}
      options={options}
      styles={customStyles(SelectArrowIcon)}
      isSearchable={false}
    />
  );
};

export default SelectBar;
