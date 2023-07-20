import React from 'react';
import { SelectBox, Select } from './style';
import SelectBtn from '../../assets/icons/SelectBtn.svg';

const SelectBar = ({ options }) => {
  return (
    <SelectBox>
      <Select $selectBtn={SelectBtn}>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </Select>
    </SelectBox>
  );
};

export default SelectBar;

//상세페이지에서
// const floorOptions = ['B2층', 'B1층', '1층', '2층', '3층', '4층'];
// <FloorBox options={floorOptions} />
