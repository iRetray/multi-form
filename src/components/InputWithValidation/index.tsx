import { TextField, Typography } from '@mui/material';

interface InputWithValidationProps {
  label: string;
  placeholder: string;
}

export const InputWithValidation: React.FC<InputWithValidationProps> = ({
  label,
  placeholder,
}) => (
  <>
    <Typography style={{ marginBottom: '8px' }} variant="h3">
      {label}
    </Typography>
    <TextField
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
);
