import React from 'react';

import { Typography, Button } from '@mui/material';
import { StepContainer } from '../../styles';

import { Step } from '../..';

import { SwitchContainer, SwitchStyled } from './styles';
import { AddOn } from '../../../components';

interface PickAddOnsProps {
  updateCurrentStep: (nextStep: Step) => void;
}

export const PickAddOns: React.FC<PickAddOnsProps> = ({
  updateCurrentStep,
}) => {
  return (
    <StepContainer>
      <Typography variant="h1" style={{ marginBottom: '12px' }}>
        Pick add-ons
      </Typography>
      <Typography variant="h2" style={{ marginBottom: '35px' }}>
        Add-ons help enhance your gaming experience.
      </Typography>
      <AddOn
        checked
        title="Online service"
        subtitle="Access to multiplayer games"
        price="+$1/mo"
      />
      <AddOn
        title="Larger storage"
        subtitle="Extra 1TB of cloud save"
        price="+$2/mo"
      />
      <AddOn
        title="Customizable profile"
        subtitle="Custom theme on your profile"
        price="+$2/mo"
      />
      <div style={{ display: 'flex', marginTop: 'auto' }}>
        <Button
          sx={{
            color: '#9699AA',
            bgcolor: '#FFFFFF',
            ':hover': {
              bgcolor: '#FFFFFF',
              color: '#022959',
            },
          }}
          style={{
            width: 'fit-content',
            marginTop: 'auto',
            marginLeft: '0px',
          }}
          variant="text"
          onClick={() => {
            updateCurrentStep(2);
          }}
        >
          Go Back
        </Button>
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
            updateCurrentStep(4);
          }}
        >
          Next step
        </Button>
      </div>
    </StepContainer>
  );
};
