import React from 'react';

import { Typography } from '@mui/material';
import { ButtonsContainer, StepContainer } from '../../styles';

import { Step } from '../..';
import { ButtonBlue, ButtonWhite, PlanCard } from '../../../components';

import { ArcadeIcon, AdvancedIcon, ProIcon } from './PLAN_ICONS';
import { SwitchContainer, SwitchStyled } from './styles';
import { useForm } from 'react-hook-form';
import { COLORS, Intervals, PlanTypes } from '../../../constants';
import { useIsMobile } from '../../../hooks';

interface SelectYourPlanProps {
  initialValues: SelectYourPlanFormInterface;
  onFormSubmited: (data: SelectYourPlanFormInterface) => void;
  updateCurrentStep: (nextStep: Step) => void;
}

export interface SelectYourPlanFormInterface {
  planType: PlanTypes;
  interval: Intervals;
}

export const SelectYourPlan: React.FC<SelectYourPlanProps> = ({
  initialValues,
  onFormSubmited,
  updateCurrentStep,
}) => {
  const isMobile = useIsMobile();

  const { setValue, handleSubmit, getValues, watch } =
    useForm<SelectYourPlanFormInterface>({
      defaultValues: initialValues,
    });

  const currentType = watch('planType');
  const currentInterval = watch('interval');

  const onSubmit = (): void => {
    onFormSubmited(getValues());
    updateCurrentStep(3);
  };

  const handleClickCard = (newType: PlanTypes): void => {
    setValue('planType', newType);
  };

  const handleChangeSwitch = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setValue('interval', target.checked ? Intervals.YEARLY : Intervals.MONTHLY);
  };

  return (
    <StepContainer>
      <Typography variant="h1" style={{ marginBottom: '12px' }}>
        Select your plan
      </Typography>
      <Typography
        variant="h2"
        style={{ marginBottom: isMobile ? '22px' : '35px' }}
      >
        You have the option of monthly or yearly billing.
      </Typography>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '-webkit-fill-available',
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          <PlanCard
            selected={currentType === 'ARCADE'}
            icon={ArcadeIcon}
            title="Arcade"
            price="$9/mo"
            onClick={() => {
              handleClickCard(PlanTypes.ARCADE);
            }}
          />
          <PlanCard
            selected={currentType === 'ADVANCED'}
            icon={AdvancedIcon}
            title="Advanced"
            price="$12/mo"
            onClick={() => {
              handleClickCard(PlanTypes.ADVANCED);
            }}
          />
          <PlanCard
            selected={currentType === 'PRO'}
            zeroMargin
            icon={ProIcon}
            title="Pro"
            price="$15/mo"
            onClick={() => {
              handleClickCard(PlanTypes.PRO);
            }}
          />
        </div>
        <SwitchContainer>
          <Typography
            variant="h4"
            style={
              currentInterval === Intervals.MONTHLY
                ? {}
                : {
                    fontWeight: '500',
                    color: COLORS.greyDark,
                  }
            }
          >
            Monthly
          </Typography>
          <SwitchStyled
            checked={currentInterval === Intervals.YEARLY}
            onChange={handleChangeSwitch}
          />
          <Typography
            variant="h4"
            style={
              currentInterval === Intervals.YEARLY
                ? {}
                : {
                    fontWeight: '500',
                    color: COLORS.greyDark,
                  }
            }
          >
            Yearly
          </Typography>
        </SwitchContainer>
        <ButtonsContainer style={{ marginLeft: '0px' }}>
          <ButtonWhite
            onClick={() => {
              updateCurrentStep(1);
            }}
          >
            Go Back
          </ButtonWhite>
          <ButtonBlue type="submit">Next step</ButtonBlue>
        </ButtonsContainer>
      </form>
    </StepContainer>
  );
};
