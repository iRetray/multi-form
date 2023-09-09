import { styled } from '@mui/system';

import { Avatar } from '@mui/material';

interface Props {
  selected: boolean;
}

export const AddOnContainer = styled('div')<Props>(({ selected }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  cursor: 'pointer',
  marginBottom: '16px',
  border: selected ? '1px solid #483EFF' : '1px solid #D6D9E6',
  borderRadius: '8px',
  padding: '18px 24px',
  ':hover': {
    backgroundColor: '#F8F9FF',
  },
}));

export const TextContainer = styled('div')({
  marginLeft: '16px',
});

export const AvatarStyled = styled(Avatar)(({ active }) => ({
  backgroundColor: active ? '#BEE2FD' : 'transparent',
  border: active ? 'none' : '1px solid #FFFFFF',
  color: active ? 'inherit' : '#FFFFFF',
}));
