import React, { useState } from 'react';
import Select from 'react-select';
import { customStyles } from './style';
import SelectArrowIcon from '../../assets/icons/SelectBtn.svg';

const SelectBar = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  return (
    <Select
      placeholder={options[0].value}
      value={selectedOption}
      onChange={setSelectedOption}
      options={options}
      styles={customStyles(SelectArrowIcon)}
      isSearchable={false}
    />
  );
};

export default SelectBar;
