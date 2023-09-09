import { Typography } from '@mui/material';

import { AvatarStyled, SidebarLabelContainer, TextContainer } from './styles';

interface SidebarLabelProps {
  active?: boolean;
  number: string;
  description: string;
}

export const SidebarLabel: React.FC<SidebarLabelProps> = ({
  active,
  number,
  description,
}) => (
  <SidebarLabelContainer>
    <AvatarStyled active={active}>{number}</AvatarStyled>
    <TextContainer>
      <Typography variant="subtitle1">STEP {number}</Typography>
      <Typography variant="subtitle2">{description}</Typography>
    </TextContainer>
  </SidebarLabelContainer>
);
