import { styled } from '@mui/system';

import blueImage from '../../assets/images/blue-background.svg';

export const SidebarContainer = styled('div')({
  borderRadius: '10px',
  backgroundImage: `url(${blueImage})`,
});

export const LabelsContainer = styled('div')({
  padding: '32px 40px',
});
