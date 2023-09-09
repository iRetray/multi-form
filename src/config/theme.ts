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
  },
});
