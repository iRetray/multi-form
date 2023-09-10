import React from 'react';

import { Typography, Button } from '@mui/material';
import { StepContainer } from '../../styles';

import { Step } from '../..';
import { PlanCard } from '../../../components';

import { ArcadeIcon, AdvancedIcon, ProIcon } from './PLAN_ICONS';
import { SwitchContainer, SwitchStyled } from './styles';
import { useForm } from 'react-hook-form';

interface SelectYourPlanProps {
  initialValues: SelectYourPlanFormInterface;
  onFormSubmited: (data: SelectYourPlanFormInterface) => void;
  updateCurrentStep: (nextStep: Step) => void;
}

type PlanTypeI = 'ARCADE' | 'ADVANCED' | 'PRO';
type IntervalI = 'MONTHLY' | 'YEARLY';

export interface SelectYourPlanFormInterface {
  planType: PlanTypeI;
  interval: IntervalI;
}

export const SelectYourPlan: React.FC<SelectYourPlanProps> = ({
  initialValues,
  onFormSubmited,
  updateCurrentStep,
}) => {
  const { setValue, handleSubmit, getValues, watch } =
    useForm<SelectYourPlanFormInterface>({
      defaultValues: initialValues,
    });

  const currentType = watch('planType');

  const onSubmit = (): void => {
    onFormSubmited(getValues());
    updateCurrentStep(3);
  };

  const handleClickCard = (newType: PlanTypeI): void => {
    setValue('planType', newType);
  };

  const handleChangeSwitch = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setValue('interval', target.checked ? 'YEARLY' : 'MONTHLY');
  };

  return (
    <StepContainer>
      <Typography variant="h1" style={{ marginBottom: '12px' }}>
        Select your plan
      </Typography>
      <Typography variant="h2" style={{ marginBottom: '35px' }}>
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
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <PlanCard
            selected={currentType === 'ARCADE'}
            icon={ArcadeIcon}
            title="Arcade"
            price="$9/mo"
            onClick={() => {
              handleClickCard('ARCADE');
            }}
          />
          <PlanCard
            selected={currentType === 'ADVANCED'}
            icon={AdvancedIcon}
            title="Advanced"
            price="$12/mo"
            onClick={() => {
              handleClickCard('ADVANCED');
            }}
          />
          <PlanCard
            selected={currentType === 'PRO'}
            zeroMargin
            icon={ProIcon}
            title="Pro"
            price="$15/mo"
            onClick={() => {
              handleClickCard('PRO');
            }}
          />
        </div>
        <SwitchContainer>
          <Typography variant="h4">Monthly</Typography>
          <SwitchStyled onChange={handleChangeSwitch} />
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
            type="submit"
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
          >
            Next step
          </Button>
        </div>
      </form>
    </StepContainer>
  );
};
