import { createTheme } from '@mui/material';
import { COLORS } from '../constants';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: COLORS.primary,
    },
    secondary: {
      main: COLORS.secondary,
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
      color: COLORS.primary,
    },
    h2: {
      fontSize: '16px',
      fontWeight: 400,
      color: COLORS.greyDark,
    },
    h3: {
      fontSize: '14px',
      fontWeight: 400,
      color: COLORS.primary,
    },
    h4: {
      fontSize: '14px',
      fontWeight: 700,
      color: COLORS.primary,
    },
    h5: {
      fontSize: '16px',
      fontWeight: 700,
      color: COLORS.primary,
    },
    h6: {
      fontSize: '20px',
      fontWeight: 700,
      color: COLORS.secondary,
    },
    body1: {
      fontSize: '16px',
      fontWeight: 500,
      color: COLORS.primary,
    },
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      color: COLORS.greyDark,
    },
    subtitle1: {
      fontSize: '12px',
      color: COLORS.bluePurple,
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: '14px',
      color: COLORS.white,
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
          color: COLORS.primary,
          fontSize: '14px',
          fontWeight: 700,
        },
      },
    },
  },
});
