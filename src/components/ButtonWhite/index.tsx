import { Button, ButtonProps } from '@mui/material';
import { COLORS } from '../../constants';

interface ButtonWhiteProps extends ButtonProps {
  children: JSX.Element | string;
}

export const ButtonWhite: React.FC<ButtonWhiteProps> = ({
  children,
  ...rest
}) => (
  <Button
    sx={{
      color: COLORS.greyDark,
      bgcolor: COLORS.white,
      ':hover': {
        bgcolor: COLORS.white,
        color: COLORS.primary,
      },
    }}
    style={{
      width: 'fit-content',
      marginTop: 'auto',
      marginLeft: '0px',
    }}
    variant="text"
    {...rest}
  >
    {children}
  </Button>
);
