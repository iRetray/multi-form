import { styled } from '@mui/system';

import { Avatar } from '@mui/material';

export const SidebarLabelContainer = styled('div')({
  position: 'relative',
  display: 'flex',
  marginBottom: '32px',
});

export const TextContainer = styled('div')({
  marginLeft: '16px',
});

export const AvatarStyled = styled(Avatar)(({ active }) => ({
  backgroundColor: active ? '#BEE2FD' : 'transparent',
  border: active ? '1px solid #BEE2FD' : '1px solid #FFFFFF',
  color: active ? 'inherit' : '#FFFFFF',
}));
