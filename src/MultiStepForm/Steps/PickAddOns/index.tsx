import React from 'react';

import { Typography } from '@mui/material';
import { StepContainer } from '../../styles';

import { Step } from '../..';

import { AddOn, ButtonBlue, ButtonWhite } from '../../../components';
import { useForm } from 'react-hook-form';

interface PickAddOnsProps {
  initialValues: PickAddOnsFormInterface;
  onFormSubmited: (data: PickAddOnsFormInterface) => void;
  updateCurrentStep: (nextStep: Step) => void;
}

export interface PickAddOnsFormInterface {
  onlineService: boolean;
  largerStorage: boolean;
  customizableProfile: boolean;
}

export const PickAddOns: React.FC<PickAddOnsProps> = ({
  initialValues,
  onFormSubmited,
  updateCurrentStep,
}) => {
  const { setValue, handleSubmit, getValues, watch } =
    useForm<PickAddOnsFormInterface>({
      defaultValues: initialValues,
    });

  const currentOnlineStorage = watch('onlineService');
  const currentLargerStorage = watch('largerStorage');
  const currentCustomizableProfile = watch('customizableProfile');

  const onSubmit = (): void => {
    onFormSubmited(getValues());
    updateCurrentStep(4);
  };

  const handleCheckField = (
    fieldName: 'onlineService' | 'largerStorage' | 'customizableProfile',
    value: boolean,
  ): void => {
    setValue(fieldName, value);
  };

  return (
    <StepContainer>
      <Typography variant="h1" style={{ marginBottom: '12px' }}>
        Pick add-ons
      </Typography>
      <Typography variant="h2" style={{ marginBottom: '35px' }}>
        Add-ons help enhance your gaming experience.
      </Typography>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '-webkit-fill-available',
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <AddOn
          checked={currentOnlineStorage}
          onChange={newValue => {
            handleCheckField('onlineService', newValue);
          }}
          title="Online service"
          subtitle="Access to multiplayer games"
          price="+$1/mo"
        />
        <AddOn
          checked={currentLargerStorage}
          onChange={newValue => {
            handleCheckField('largerStorage', newValue);
          }}
          title="Larger storage"
          subtitle="Extra 1TB of cloud save"
          price="+$2/mo"
        />
        <AddOn
          checked={currentCustomizableProfile}
          onChange={newValue => {
            handleCheckField('customizableProfile', newValue);
          }}
          title="Customizable profile"
          subtitle="Custom theme on your profile"
          price="+$2/mo"
        />
        <div style={{ display: 'flex', marginTop: 'auto' }}>
          <ButtonWhite
            onClick={() => {
              updateCurrentStep(2);
            }}
          >
            Go Back
          </ButtonWhite>
          <ButtonBlue type="submit">Next step</ButtonBlue>
        </div>
      </form>
    </StepContainer>
  );
};
