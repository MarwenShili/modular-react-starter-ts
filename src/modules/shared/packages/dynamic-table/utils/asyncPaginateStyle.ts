export const asyncPaginateStyles = {
  control: (base: any) => ({
    ...base,
    width: '100%',
    minWidth: '250px',
    minHeight: '40px',
    borderRadius: '8px',
    borderColor: '#d9d9d9', // Ant Design default border color
    boxShadow: 'none', // Remove box shadow
    '&:hover': {
      borderColor: '#40a9ff', // Ant Design hover color (blue)
    },
  }),
  input: (base: any) => ({
    ...base,
    fontSize: '14px', // Match AntD Select font size
    width: '100%',
  }),
  placeholder: (base: any) => ({
    ...base,
    color: '#bfbfbf', // AntD placeholder color
    fontSize: '14px',
    textWrap: 'nowrap',
  }),
  dropdownIndicator: (base: any) => ({
    ...base,
    color: '#bfbfbf', // AntD arrow color
  }),
  indicatorSeparator: (base: any) => ({
    ...base,
    display: 'none', // Remove separator between arrow and input
  }),
  menu: (base: any) => ({
    ...base,
    borderRadius: '4px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', // AntD-like dropdown shadow
    zIndex: 1000,
    marginTop: '0px',
  }),
  option: (base: any, { isFocused }: any) => ({
    ...base,
    backgroundColor: isFocused ? '#e6f7ff' : 'white', // AntD hover background color
    color: '#000000',
    padding: '8px 12px',
    margin: '0 5px',
    width: 'calc(100% - 10px)',
    borderRadius: '6px',
    cursor: 'pointer',
  }),
  singleValue: (base: any) => ({
    ...base,
    fontSize: '14px',
    color: '#000000',
  }),
  valueContainer: (base: any) => ({
    ...base,
    padding: '0 11px', // AntD padding inside the Select
  }),
  clearIndicator: (base: any) => ({
    ...base,
    padding: '2px', // Adjust clear indicator spacing
    color: '#bfbfbf', // AntD clear indicator color
    cursor: 'pointer',
  }),
}
