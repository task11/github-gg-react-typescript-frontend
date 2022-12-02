export const darkTheme = {
  bgColor: {
    background: '#4A4A4D',
    header: '#3F4E4F',
    modal: '#000000',
    card: '#333333',
    logo: '#ECECEC',
    cardHover: '#595959',
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
  buttonColor: '#333333',
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
    logo: '#3F4E4F',
    cardHover: '#f9f9f9',
  },
  fontColor: {
    default: '#333333',
    header: '#ECECEC',
    accent: '#6060f9',
    hover: '#3F4E4F',
  },
  borderColor: {
    default: '#121212',
  },

  close: 'black',
  inputColor: 'dark',
  buttonColor: '#2C3639',
  buttonTextColor: '#333333',
  hoverButtonText: 'white',
  borderBottom: 'lightgray',
  boxShadow: '#292929',
};

export type Theme = typeof lightTheme;
