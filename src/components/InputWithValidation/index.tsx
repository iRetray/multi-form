import { TextField, Typography } from '@mui/material';

import { Controller, Control, RegisterOptions } from 'react-hook-form';
import { PersonalInfoFormInterface } from '../../MultiStepForm/Steps/PersonalInfo';
import { LabelsContainer } from './styles';
import { COLORS } from '../../constants';

interface InputWithValidationProps {
  label: string;
  placeholder: string;
  name: 'name' | 'email' | 'phone';
  control: Control<PersonalInfoFormInterface>;
  rules:
    | Omit<
        RegisterOptions<PersonalInfoFormInterface, 'name' | 'email' | 'phone'>,
        'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
      >
    | undefined;
}

export const InputWithValidation: React.FC<InputWithValidationProps> = ({
  label,
  placeholder,
  name,
  control,
  rules,
}) => (
  <>
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={rules}
      render={({ field, fieldState }) => (
        <>
          <LabelsContainer>
            <Typography variant="h3">{label}</Typography>
            {fieldState.error && (
              <Typography style={{ color: COLORS.red }} variant="h4">
                {fieldState.error.message}
              </Typography>
            )}
          </LabelsContainer>
          <TextField
            {...field}
            error={!!fieldState.error}
            placeholder={placeholder}
            style={{ height: '48px', marginBottom: '24px' }}
            InputProps={{
              sx: {
                borderRadius: '8px',
                height: '48px',
                borderColor: COLORS.grey,
              },
            }}
            InputLabelProps={{
              style: {
                height: '48px',
              },
            }}
            inputProps={{
              style: {
                height: '48px',
              },
            }}
          />
        </>
      )}
    />
  </>
);
