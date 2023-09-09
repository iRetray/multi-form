import { styled } from '@mui/system';

import { Card } from '@mui/material';

export const FullscreenContainer = styled('div')({
  height: '95vh',
  display: 'flex',
});

export const CardFormContainer = styled(Card)({
  display: 'flex',
  maxWidth: 940,
  height: '568px',
  padding: 16,
  borderRadius: 15,
  boxShadow: '0px 25px 40px -20px rgba(0, 0, 0, 0.10)',
  margin: 'auto',
  width: '-webkit-fill-available',
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
});
