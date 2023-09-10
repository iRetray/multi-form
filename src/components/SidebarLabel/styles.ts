import { styled } from '@mui/system';

import { Avatar } from '@mui/material';
import { COLORS } from '../../constants';

export const SidebarLabelContainer = styled('div')({
  display: 'flex',
  marginBottom: '32px',
  '@media (max-width: 800px)': {
    marginBottom: '0px',
    margin: '0px 16px',
  },
});

export const TextContainer = styled('div')({
  marginLeft: '16px',
  '@media (max-width: 800px)': {
    display: 'none',
  },
});

export const AvatarStyled = styled(Avatar)(({ active }) => ({
  backgroundColor: active ? COLORS.blueSoft : 'transparent',
  border: active ? `1px solid ${COLORS.blueSoft}` : `1px solid ${COLORS.white}`,
  color: active ? 'inherit' : COLORS.white,
}));
