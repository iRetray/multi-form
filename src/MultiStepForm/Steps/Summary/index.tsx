import React from 'react';

import { Typography } from '@mui/material';
import { StepContainer } from '../../styles';

import { FormValuesState, Step } from '../..';
import { BillContainer } from './styles';
import { COLORS, Intervals, PlanTypes } from '../../../constants';
import { ButtonBlue, ButtonWhite, SummaryAddOn } from '../../../components';

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
  formValues: FormValuesState;
  updateCurrentStep: (nextStep: Step) => void;
}

export const Summary: React.FC<SummaryProps> = ({
  formValues,
  updateCurrentStep,
}) => {
  const { selectYourPlan, pickAddOns } = formValues;

  const isMonthly = selectYourPlan.interval === Intervals.MONTHLY;

  const extractNumbersFromString = (string: string): number => {
    const matchResult = string.match(/\d+/g);
    return matchResult ? parseInt(matchResult[0], 10) : 0;
  };

  const getTotalPrice = (): string => {
    let total = extractNumbersFromString(
      PLAN_TYPE_TO_PRICE(isMonthly)[selectYourPlan.planType],
    );
    if (pickAddOns.onlineService) {
      total =
        total +
        extractNumbersFromString(ADDON_TO_PRICE(isMonthly)['Online service']);
    }
    if (pickAddOns.largerStorage) {
      total =
        total +
        extractNumbersFromString(ADDON_TO_PRICE(isMonthly)['Larger storage']);
    }
    if (pickAddOns.customizableProfile) {
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
            <Typography variant="body1" style={{ marginBottom: '8px' }}>
              {PLAN_TYPE_TO_STRING[selectYourPlan.planType]} (
              {PLAN_INTERVAL_TO_STRING[selectYourPlan.interval]})
            </Typography>
            <Typography
              variant="body2"
              onClick={() => {
                updateCurrentStep(2);
              }}
              style={{
                marginBottom: '8px',
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
            >
              Change
            </Typography>
          </div>
          <Typography style={{ marginLeft: 'auto' }} variant="h5">
            {PLAN_TYPE_TO_PRICE(isMonthly)[selectYourPlan.planType]}
          </Typography>
        </div>
        {(pickAddOns.onlineService ||
          pickAddOns.largerStorage ||
          pickAddOns.customizableProfile) && (
          <hr
            style={{
              color: COLORS.greyDark,
              borderStyle: 'solid',
              opacity: 0.2,
              marginTop: '24px',
              marginBottom: '24px',
            }}
          />
        )}

        {pickAddOns.onlineService && (
          <SummaryAddOn
            name="Online service"
            price={ADDON_TO_PRICE(isMonthly)['Online service']}
          />
        )}
        {pickAddOns.largerStorage && (
          <SummaryAddOn
            name="Larger storage"
            price={ADDON_TO_PRICE(isMonthly)['Larger storage']}
          />
        )}
        {pickAddOns.customizableProfile && (
          <SummaryAddOn
            name="Customizable profile"
            price={ADDON_TO_PRICE(isMonthly)['Customizable profile']}
          />
        )}
      </BillContainer>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '24px',
        }}
      >
        <Typography variant="body2">
          {isMonthly ? 'Total (per month)' : 'Total (per year)'}
        </Typography>
        <Typography variant="h6">{getTotalPrice()}</Typography>
      </div>
      <div style={{ display: 'flex', marginTop: 'auto' }}>
        <ButtonWhite
          onClick={() => {
            updateCurrentStep(3);
          }}
        >
          Go Back
        </ButtonWhite>
        <ButtonBlue
          onClick={() => {
            updateCurrentStep(5);
          }}
        >
          Confirm
        </ButtonBlue>
      </div>
    </StepContainer>
  );
};
