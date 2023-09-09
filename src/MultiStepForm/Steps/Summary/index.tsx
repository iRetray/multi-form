import React from 'react';

import { Typography, Button } from '@mui/material';
import { StepContainer } from '../../styles';

import { Step } from '../..';
import { BillContainer } from './styles';

interface SummaryProps {
  updateCurrentStep: (nextStep: Step) => void;
}

export const Summary: React.FC<SummaryProps> = ({ updateCurrentStep }) => {
  return (
    <StepContainer>
      <Typography variant="h1" style={{ marginBottom: '12px' }}>
        Finishing up
      </Typography>
      <Typography variant="h2" style={{ marginBottom: '35px' }}>
        Double-check everything looks OK before confirming.
      </Typography>
      <BillContainer>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div>
            <Typography variant="body1" style={{ marginBottom: '8px' }}>
              Arcade (Monthly)
            </Typography>
            <Typography
              variant="body2"
              style={{ marginBottom: '8px', textDecoration: 'underline' }}
            >
              Change
            </Typography>
          </div>
          <Typography style={{ marginLeft: 'auto' }} variant="h5">
            $9/mo
          </Typography>
        </div>
        <hr
          style={{
            color: '#9699AA',
            borderStyle: 'solid',
            opacity: 0.2,
            marginTop: '24px',
            marginBottom: '24px',
          }}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '16px',
          }}
        >
          <Typography variant="body2">Online service</Typography>
          <Typography variant="h3" style={{ color: '#022959' }}>
            +$1/mo
          </Typography>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '16px',
          }}
        >
          <Typography variant="body2">Online service</Typography>
          <Typography variant="h3" style={{ color: '#022959' }}>
            +$1/mo
          </Typography>
        </div>
      </BillContainer>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '24px',
        }}
      >
        <Typography variant="body2">Total (per month)</Typography>
        <Typography variant="h6">+$12/mo</Typography>
      </div>

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
          Confirm
        </Button>
      </div>
    </StepContainer>
  );
};
