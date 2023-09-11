import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { COLORS } from '../../../constants';

export const SwitchContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '24px',
  backgroundColor: COLORS.greyMedium,
  borderRadius: '8px',
  padding: '12px',
  marginTop: '32px',
  '@media (max-width: 800px)': {
    marginTop: '24px',
  },
});

export const SwitchStyled = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase': {
    color: COLORS.white,
    '& + .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: COLORS.primary,
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    marginTop: -5,
    marginLeft: -3,
    borderRadius: 100,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 100,
    opacity: 1,
    backgroundColor: COLORS.white,
    boxSizing: 'border-box',
  },
  width: 38,
  height: 20,
  padding: 0,
  '.Mui-checked': {
    transform: 'translateX(14px)',
  },
}));
