import React from 'react';

import { Typography, Button } from '@mui/material';
import { InputWithValidation } from '../../../components';
import { StepContainer } from '../../styles';

import { Step } from '../..';

interface PersonalInfoProps {
  updateCurrentStep: (nextStep: Step) => void;
}

export const PersonalInfo: React.FC<PersonalInfoProps> = ({
  updateCurrentStep,
}) => {
  return (
    <StepContainer>
      <Typography variant="h1" style={{ marginBottom: '12px' }}>
        Personal info
      </Typography>
      <Typography variant="h2" style={{ marginBottom: '35px' }}>
        Please provide your name, email address, and phone number.
      </Typography>
      <InputWithValidation label="Name" placeholder="e.g. Stephen King" />
      <InputWithValidation
        label="Email Address"
        placeholder="e.g. stephenking@lorem.com"
      />
      <InputWithValidation
        label="Phone Number"
        placeholder="e.g. +1 234 567 890"
      />
      <Button
        sx={{
          ':hover': {
            bgcolor: '#164A8A',
          },
        }}
        style={{
          width: 'fit-content',
          marginTop: 'auto',
          marginLeft: 'auto',
        }}
        variant="contained"
        onClick={() => {
          updateCurrentStep(2);
        }}
      >
        Next step
      </Button>
    </StepContainer>
  );
};
