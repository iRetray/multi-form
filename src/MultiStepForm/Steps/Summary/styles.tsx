import { styled } from '@mui/material/styles';
import { COLORS } from '../../../constants';

export const BillContainer = styled('div')({
  backgroundColor: COLORS.greyMedium,
  padding: '16px 24px 24px 24px',
  borderRadius: '8px',
});

export const TotalContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '24px',
  '@media (max-width: 800px)': {
    margin: '24px 24px 0px 24px',
  },
});
