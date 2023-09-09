import React from 'react';

import { Typography } from '@mui/material';
import { StepContainer } from '../../styles';
import { ICON_FINISH } from './ICON_FINISH';

export const Finish: React.FC = () => {
  return (
    <StepContainer style={{ alignItems: 'center', justifyContent: 'center' }}>
      {ICON_FINISH}
      <Typography
        variant="h1"
        style={{ marginBottom: '14px', marginTop: '32px' }}
      >
        Thank you!
      </Typography>
      <Typography variant="h2" style={{ textAlign: 'center' }}>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </Typography>
    </StepContainer>
  );
};
