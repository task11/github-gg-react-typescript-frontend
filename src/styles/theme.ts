export const darkTheme = {
  bgColor: {
    background: '#121212',
    header: '#3F4E4F',
    card: '#2C3639',
  },
  fontColor: {
    default: '#ECECEC',
    header: '#ECECEC',
    accent: '#6060f9',
    hover: '#6060f9',
  },
  borderColor: {
    default: '#121212',
  },
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
  inputColor: 'dark',
  buttonColor: 'white',
  buttonTextColor: '#333333',
  hoverButtonText: 'white',
  borderBottom: 'lightgray',
  boxShadow: '#292929',
};

export type Theme = typeof lightTheme;
