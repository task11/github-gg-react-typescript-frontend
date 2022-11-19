export const darkTheme = {
  bgColor: {
    background: '#121212',
    header: '#202020',
    card: '#333333',
  },
  fontColor: {
    default: '#ECECEC',
    accent: '#6060f9',
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
    background: 'whitesmoke',
    header: 'white',
    card: 'white',
  },
  fontColor: {
    default: '#333333',
    accent: '#30336b',
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
