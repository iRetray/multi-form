import { styled } from '@mui/system';
import { COLORS } from '../../constants';

interface Props {
  selected: boolean;
  zeroMargin: boolean;
}

export const PlanCardContainer = styled('div')<Props>(
  ({ selected, zeroMargin }) => ({
    cursor: 'pointer',
    width: '138px',
    border: selected
      ? `1px solid ${COLORS.secondary}`
      : `1px solid ${COLORS.grey}`,
    borderRadius: '8px',
    padding: '20px 16px 16px 16px',
    marginRight: zeroMargin ? '0px' : '18px',
    ':hover': {
      backgroundColor: COLORS.greyMedium,
    },
    '@media (max-width: 800px)': {
      alignItems: 'center',
      width: '-webkit-fill-available',
      margin: '0px',
      display: 'flex',
      marginBottom: '12px',
      padding: '16px',
    },
  }),
);

export const TextContainer = styled('div')<Props>(() => ({
  '@media (max-width: 800px)': {
    marginLeft: '14px',
  },
}));
