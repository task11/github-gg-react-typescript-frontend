export const darkTheme = {
  bgColor: {
    background: '#121212',
    header: '#3F4E4F',
    modal: '#000000',
    card: '#333333',
  },
  fontColor: {
    default: '#ECECEC',
    header: '#ECECEC',
    accent: '#6060f9',
    hover: '#FFFFFF',
  },
  borderColor: {
    default: '#121212',
  },
  close: '#333333',
  inputColor: 'whitesmoke',
  buttonColor: 'whitesmoke',
  buttonTextColor: '#333333',
  hoverButtonText: 'dark',
  boxShadow: '#292929',
};

export const lightTheme = {
  bgColor: {
    background: '#DCD7C9',
    header: '#3F4E4F',
    modal: '#FFFFFF',
    card: '#ECECEC',
  },
  fontColor: {
    default: '#333333',
    header: '#ECECEC',
    accent: '#30336b',
    hover: '#3F4E4F',
  },
  borderColor: {
    default: '#121212',
  },
  close: 'black',
  inputColor: 'dark',
  buttonColor: 'white',
  buttonTextColor: '#333333',
  hoverButtonText: 'white',
  borderBottom: 'lightgray',
  boxShadow: '#292929',
};

export type Theme = typeof lightTheme;
