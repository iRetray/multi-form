import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#022959',
    },
    secondary: {
      main: '#483EFF',
    },
  },
  typography: {
    fontFamily: ['Ubuntu', 'sans-serif'].join(','),
    button: {
      textTransform: 'none',
    },
    h1: {
      fontSize: '32px',
      fontWeight: 700,
      color: '#022959',
    },
    h2: {
      fontSize: '16px',
      fontWeight: 400,
      color: '#9699AA',
    },
    h3: {
      fontSize: '14px',
      fontWeight: 400,
      color: '#022959',
    },
    h4: {
      fontSize: '14px',
      fontWeight: 700,
      color: '#022959',
    },
    body1: {
      fontSize: '16px',
      fontWeight: 500,
      color: '#022959',
    },
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      color: '#9699AA',
    },
    subtitle1: {
      fontSize: '12px',
      color: '#ABBCFF',
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: '14px',
      color: '#FFFFFF',
      fontWeight: 700,
      letterSpacing: '1px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '14px 24px 16px 25px',
          fontSize: '16px',
          lineHeight: '1',
          borderRadius: '8px',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          color: '#022959',
          fontSize: '14px',
          fontWeight: 700,
        },
      },
    },
  },
});
