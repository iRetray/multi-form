import { styled } from '@mui/system';

import { Card } from '@mui/material';

export const FullscreenContainer = styled('div')({
  height: '95vh',
  display: 'flex',
  '@media (max-width: 800px)': {
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
