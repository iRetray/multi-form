import React from 'react';

import { Typography } from '@mui/material';
import { ButtonBlue, InputWithValidation } from '../../../components';
import { ButtonsContainer, StepContainer } from '../../styles';

import { Step } from '../..';

import { useForm } from 'react-hook-form';
import { useIsMobile } from '../../../hooks';

interface PersonalInfoProps {
  initialValues: PersonalInfoFormInterface;
  onFormSubmited: (data: PersonalInfoFormInterface) => void;
  updateCurrentStep: (nextStep: Step) => void;
}

export interface PersonalInfoFormInterface {
  name: string;
  email: string;
  phone: string;
}

export const PersonalInfo: React.FC<PersonalInfoProps> = ({
  initialValues,
  onFormSubmited,
  updateCurrentStep,
}) => {
  const isMobile = useIsMobile();

  const { control, handleSubmit, getValues } =
    useForm<PersonalInfoFormInterface>({
      defaultValues: initialValues,
    });

  const onSubmit = (): void => {
    onFormSubmited(getValues());
    updateCurrentStep(2);
  };

  return (
    <StepContainer>
      <Typography variant="h1" style={{ marginBottom: '12px' }}>
        Personal info
      </Typography>
      <Typography
        variant="h2"
        style={{ marginBottom: isMobile ? '22px' : '35px' }}
      >
        Please provide your name, email address, and phone number.
      </Typography>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '-webkit-fill-available',
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputWithValidation
          name="name"
          control={control}
          rules={{ required: 'This field is required' }}
          label="Name"
          placeholder="e.g. Stephen King"
        />
        <InputWithValidation
          name="email"
          control={control}
          rules={{
            required: 'This field is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address',
            },
          }}
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
        />
        <InputWithValidation
          name="phone"
          control={control}
          rules={{
            required: 'This field is required',
          }}
          label="Phone Number"
          placeholder="e.g. +1 234 567 890"
        />
        <ButtonsContainer>
          <ButtonBlue type="submit">Next step</ButtonBlue>
        </ButtonsContainer>
      </form>
    </StepContainer>
  );
};
