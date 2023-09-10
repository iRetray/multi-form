import { styled } from '@mui/system';

import blueImage from '../../assets/images/blue-background.svg';

import mobileBlueImage from '../../assets/images/mobile-background.svg';

export const SidebarContainer = styled('div')({
  borderRadius: '10px',
  backgroundImage: `url(${blueImage})`,
  backgroundSize: 'cover',
  '@media (max-width: 800px)': {
    backgroundImage: `url(${mobileBlueImage})`,
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '200px',
    zIndex: '1',
    borderRadius: '0px',
  },
});

export const LabelsContainer = styled('div')({
  padding: '32px 40px',

  '@media (max-width: 800px)': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
