import { styled } from '@mui/system';

export const SummaryAddOnContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '16px',
  '@media (max-width: 800px)': {
    marginTop: '12px',
  },
});
