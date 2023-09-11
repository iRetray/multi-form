import React from 'react';

import { Typography } from '@mui/material';
import { StepContainer } from '../../styles';
import { ICON_FINISH } from './ICON_FINISH';
import { useIsMobile } from '../../../hooks';

const STYLES_MOBILE = {
  height: '400px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const Finish: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <StepContainer
      style={
        isMobile
          ? STYLES_MOBILE
          : { alignItems: 'center', justifyContent: 'center' }
      }
    >
      {ICON_FINISH}
      <Typography
        variant="h1"
        style={{ marginBottom: '14px', marginTop: '32px' }}
      >
        Thank you!
      </Typography>
      <Typography
        variant="h2"
        style={{
          textAlign: 'center',
          lineHeight: isMobile ? '25px' : 'normal',
        }}
      >
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </Typography>
    </StepContainer>
  );
};
