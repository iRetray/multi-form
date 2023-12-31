import React from 'react';

import { Typography } from '@mui/material';
import { ButtonsContainer, StepContainer } from '../../styles';

import { Step } from '../..';

import { AddOn, ButtonBlue, ButtonWhite } from '../../../components';
import { useForm } from 'react-hook-form';
import { useIsMobile } from '../../../hooks';
import { useFormContext } from '../../../context';

interface PickAddOnsProps {
  updateCurrentStep: (nextStep: Step) => void;
}

export interface PickAddOnsFormInterface {
  onlineService: boolean;
  largerStorage: boolean;
  customizableProfile: boolean;
}

export const PickAddOns: React.FC<PickAddOnsProps> = ({
  updateCurrentStep,
}) => {
  const { values, updateFormValues } = useFormContext();

  const isMobile = useIsMobile();

  const { setValue, handleSubmit, getValues, watch } =
    useForm<PickAddOnsFormInterface>({
      defaultValues: values.PICK_ADD_ONS,
    });

  const currentOnlineStorage = watch('onlineService');
  const currentLargerStorage = watch('largerStorage');
  const currentCustomizableProfile = watch('customizableProfile');

  const onSubmit = (): void => {
    updateFormValues('PICK_ADD_ONS', getValues());
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
      <Typography
        variant="h2"
        style={{ marginBottom: isMobile ? '22px' : '35px' }}
      >
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
        <ButtonsContainer style={{ marginLeft: '0px' }}>
          <ButtonWhite
            onClick={() => {
              updateCurrentStep(2);
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
