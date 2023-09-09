import React from 'react';

import { Typography, Button } from '@mui/material';
import { StepContainer } from '../../styles';

import { Step } from '../..';
import { PlanCard } from '../../../components';

import { ArcadeIcon, AdvancedIcon, ProIcon } from './PLAN_ICONS';
import { SwitchContainer, SwitchStyled } from './styles';

interface SelectYourPlanProps {
  updateCurrentStep: (nextStep: Step) => void;
}

export const SelectYourPlan: React.FC<SelectYourPlanProps> = ({
  updateCurrentStep,
}) => {
  return (
    <StepContainer>
      <Typography variant="h1" style={{ marginBottom: '12px' }}>
        Select your plan
      </Typography>
      <Typography variant="h2" style={{ marginBottom: '35px' }}>
        You have the option of monthly or yearly billing.
      </Typography>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <PlanCard icon={ArcadeIcon} title="Arcade" price="$9/mo" />
        <PlanCard icon={AdvancedIcon} title="Advanced" price="$12/mo" />
        <PlanCard zeroMargin icon={ProIcon} title="Pro" price="$15/mo" />
      </div>
      <SwitchContainer>
        <Typography variant="h4">Monthly</Typography>
        <SwitchStyled />
        <Typography variant="h4">Yearly</Typography>
      </SwitchContainer>
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
            updateCurrentStep(1);
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
            updateCurrentStep(3);
          }}
        >
          Next step
        </Button>
      </div>
    </StepContainer>
  );
};
