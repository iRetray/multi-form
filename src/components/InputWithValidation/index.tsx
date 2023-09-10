import { TextField, Typography } from '@mui/material';

import { Controller, Control, RegisterOptions } from 'react-hook-form';
import { PersonalInfoFormInterface } from '../../MultiStepForm/Steps/PersonalInfo';

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
          <div
            style={{
              marginBottom: '8px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="h3">{label}</Typography>
            {fieldState.error && (
              <Typography style={{ color: '#EE374A' }} variant="h4">
                {fieldState.error.message}
              </Typography>
            )}
          </div>
          <TextField
            {...field}
            error={!!fieldState.error}
            placeholder={placeholder}
            style={{ height: '48px', marginBottom: '24px' }}
            InputProps={{
              sx: {
                borderRadius: '8px',
                height: '48px',
                borderColor: '#D6D9E6',
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
