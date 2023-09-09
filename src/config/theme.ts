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
