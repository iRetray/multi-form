import { Button, ButtonProps } from '@mui/material';
import { COLORS } from '../../constants';

interface ButtonBlueProps extends ButtonProps {
  children: JSX.Element | string;
}

export const ButtonBlue: React.FC<ButtonBlueProps> = ({
  children,
  ...rest
}) => (
  <Button
    sx={{
      ':hover': {
        bgcolor: COLORS.blueMedium,
      },
    }}
    style={{
      width: 'fit-content',
      marginTop: 'auto',
      marginLeft: 'auto',
    }}
    variant="contained"
    {...rest}
  >
    {children}
  </Button>
);
