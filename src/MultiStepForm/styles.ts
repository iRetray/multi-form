import { styled } from '@mui/system';

import { Card } from '@mui/material';
import { COLORS } from '../constants';

export const FullscreenContainer = styled('div')({
  height: '95vh',
  display: 'flex',
  '@media (max-width: 800px)': {
    height: '100vh',
    width: '100wh',
    position: 'relative',
  },
});

export const CardFormContainer = styled(Card)({
  display: 'flex',
  maxWidth: 940,
  height: '568px',
  padding: '16px',
  borderRadius: 15,
  boxShadow: '0px 25px 40px -20px rgba(0, 0, 0, 0.10)',
  margin: 'auto',
  width: '-webkit-fill-available',
  '@media (max-width: 800px)': {
    flexDirection: 'column',
    zIndex: '2',
    marginLeft: '16px',
    marginRight: '16px',
    padding: '24px',
    height: 'fit-content',
    marginTop: '110px',
  },
});

export const StepContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '40px',
  marginBottom: '16px',
  maxWidth: '450px',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '-webkit-fill-available',
  '@media (max-width: 800px)': {
    marginTop: '16px',
  },
});

export const ButtonsContainer = styled('div')({
  marginTop: 'auto',
  marginRight: '0px',
  marginLeft: 'auto',
  display: 'flex',
  '@media (max-width: 800px)': {
    width: '-webkit-fill-available',
    position: 'absolute',
    bottom: '0',
    left: '0',
    padding: '16px',
    display: 'flex',
    backgroundColor: COLORS.white,
    boxShadow: '0px 25px 40px -20px rgba(0, 0, 0, 0.10)',
  },
});
