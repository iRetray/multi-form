import React from 'react';

import { Typography, Button } from '@mui/material';
import { InputWithValidation } from '../../../components';
import { StepContainer } from '../../styles';

import { Step } from '../..';

import { useForm } from 'react-hook-form';

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
      <Typography variant="h2" style={{ marginBottom: '35px' }}>
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
      </form>
    </StepContainer>
  );
};
