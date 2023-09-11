import React from 'react';

import { Typography } from '@mui/material';
import { ButtonsContainer, StepContainer } from '../../styles';

import { Step } from '../..';
import { BillContainer, TotalContainer } from './styles';
import { COLORS, Intervals, PlanTypes } from '../../../constants';
import { ButtonBlue, ButtonWhite, SummaryAddOn } from '../../../components';
import { useIsMobile } from '../../../hooks';
import { useFormContext } from '../../../context';

const PLAN_TYPE_TO_STRING = {
  [PlanTypes.ARCADE]: 'Arcade',
  [PlanTypes.ADVANCED]: 'Advanced',
  [PlanTypes.PRO]: 'Pro',
};

const PLAN_TYPE_TO_PRICE = (isMonthly: boolean) => ({
  [PlanTypes.ARCADE]: isMonthly ? '$9/mo' : '$90/yr',
  [PlanTypes.ADVANCED]: isMonthly ? '$12/mo' : '$120/yr',
  [PlanTypes.PRO]: isMonthly ? '$15/mo' : '$150/yr',
});

const ADDON_TO_PRICE = (isMonthly: boolean) => ({
  'Online service': isMonthly ? '+$1/mo' : '+$10/yr',
  'Larger storage': isMonthly ? '+$2/mo' : '+$20/yr',
  'Customizable profile': isMonthly ? '+$2/mo' : '+$20/yr',
});

const PLAN_INTERVAL_TO_STRING = {
  [Intervals.MONTHLY]: 'Monthly',
  [Intervals.YEARLY]: 'Yearly',
};

interface SummaryProps {
  updateCurrentStep: (nextStep: Step) => void;
}

export const Summary: React.FC<SummaryProps> = ({ updateCurrentStep }) => {
  const { values } = useFormContext();

  const isMobile = useIsMobile();

  const { SELECT_YOUR_PLAN, PICK_ADD_ONS } = values;

  const isMonthly = SELECT_YOUR_PLAN.interval === Intervals.MONTHLY;

  const extractNumbersFromString = (string: string): number => {
    const matchResult = string.match(/\d+/g);
    return matchResult ? parseInt(matchResult[0], 10) : 0;
  };

  const getTotalPrice = (): string => {
    let total = extractNumbersFromString(
      PLAN_TYPE_TO_PRICE(isMonthly)[SELECT_YOUR_PLAN.planType],
    );
    if (PICK_ADD_ONS.onlineService) {
      total =
        total +
        extractNumbersFromString(ADDON_TO_PRICE(isMonthly)['Online service']);
    }
    if (PICK_ADD_ONS.largerStorage) {
      total =
        total +
        extractNumbersFromString(ADDON_TO_PRICE(isMonthly)['Larger storage']);
    }
    if (PICK_ADD_ONS.customizableProfile) {
      total =
        total +
        extractNumbersFromString(
          ADDON_TO_PRICE(isMonthly)['Customizable profile'],
        );
    }
    return isMonthly ? `$${total}/mo` : `$${total}/yr`;
  };

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
            <Typography
              variant="body1"
              style={isMobile ? {} : { marginBottom: '8px' }}
            >
              {PLAN_TYPE_TO_STRING[SELECT_YOUR_PLAN.planType]} (
              {PLAN_INTERVAL_TO_STRING[SELECT_YOUR_PLAN.interval]})
            </Typography>
            <Typography
              variant="body2"
              onClick={() => {
                updateCurrentStep(2);
              }}
              style={{
                marginBottom: isMobile ? '0px' : '8px',
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
            >
              Change
            </Typography>
          </div>
          <Typography style={{ marginLeft: 'auto' }} variant="h5">
            {PLAN_TYPE_TO_PRICE(isMonthly)[SELECT_YOUR_PLAN.planType]}
          </Typography>
        </div>
        {(PICK_ADD_ONS.onlineService ||
          PICK_ADD_ONS.largerStorage ||
          PICK_ADD_ONS.customizableProfile) && (
          <hr
            style={{
              color: COLORS.greyDark,
              borderStyle: 'solid',
              opacity: 0.2,
              marginTop: isMobile ? '12px' : '24px',
              marginBottom: isMobile ? '12px' : '24px',
            }}
          />
        )}

        {PICK_ADD_ONS.onlineService && (
          <SummaryAddOn
            name="Online service"
            price={ADDON_TO_PRICE(isMonthly)['Online service']}
          />
        )}
        {PICK_ADD_ONS.largerStorage && (
          <SummaryAddOn
            name="Larger storage"
            price={ADDON_TO_PRICE(isMonthly)['Larger storage']}
          />
        )}
        {PICK_ADD_ONS.customizableProfile && (
          <SummaryAddOn
            name="Customizable profile"
            price={ADDON_TO_PRICE(isMonthly)['Customizable profile']}
          />
        )}
      </BillContainer>
      <TotalContainer>
        <Typography variant="body2">
          {isMonthly ? 'Total (per month)' : 'Total (per year)'}
        </Typography>
        <Typography variant="h6">{getTotalPrice()}</Typography>
      </TotalContainer>
      <ButtonsContainer style={{ marginLeft: '0px' }}>
        <ButtonWhite
          onClick={() => {
            updateCurrentStep(3);
          }}
        >
          Go Back
        </ButtonWhite>
        <ButtonBlue
          sx={{
            bgcolor: COLORS.secondary,
            ':hover': {
              bgcolor: '#928CFF',
            },
          }}
          onClick={() => {
            updateCurrentStep(5);
          }}
        >
          Confirm
        </ButtonBlue>
      </ButtonsContainer>
    </StepContainer>
  );
};
