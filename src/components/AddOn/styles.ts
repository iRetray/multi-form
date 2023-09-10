import { styled } from '@mui/system';
import { COLORS } from '../../constants';

interface Props {
  checked: boolean;
}

export const AddOnContainer = styled('div')<Props>(({ checked }) => ({
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: '16px',
  border: checked
    ? `1px solid ${COLORS.secondary}`
    : `1px solid ${COLORS.grey}`,
  backgroundColor: checked ? COLORS.greyMedium : COLORS.white,
  borderRadius: '8px',
  padding: '18px 24px',
  ':hover': {
    backgroundColor: COLORS.greyMedium,
  },
}));
