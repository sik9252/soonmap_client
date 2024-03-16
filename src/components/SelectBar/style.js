import COLOR from '../../styles/common/color';

export const customStyles = (SelectArrowIcon) => ({
  control: () => ({
    width: '100%',
    background: '#fff',
    border: 'none',
    borderRadius: '64px',
    boxShadow: '1px 1px 4px 0px rgba(0, 0, 0, 0.25)',
    paddingLeft: '10px',
    height: '38px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  }),
  placeholder: (base) => ({
    ...base,
    fontSize: '14px',
    color: `${COLOR.MAIN_BLACK}`,
  }),
  singleValue: (provided) => ({
    ...provided,
    fontSize: '14px',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: () => ({
    height: '38px',
    display: 'flex',
    alignItems: 'center',
    '& > svg': {
      display: 'none',
    },
    '&:after': {
      content: `""`,
      background: `url(${SelectArrowIcon}) center/contain no-repeat`,
      width: '36px',
      height: '30px',
    },
  }),
  menu: (provided) => ({
    ...provided,
    borderColor: '#9e9e9e',
    borderRadius: '4px',
  }),
  option: (provided, { isSelected, isFocused }) => ({
    ...provided,
    cursor: 'pointer',
    backgroundColor: isSelected || isFocused ? `${COLOR.MAIN_BLUE}` : provided.backgroundColor,
    color: isSelected || isFocused ? `${COLOR.MAIN_WHITE}` : provided.color,
  }),
});
