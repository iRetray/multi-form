import { Typography } from '@mui/material';

import { PlanCardContainer } from './styles';

interface PlanCardProps {
  selected: boolean;
  icon: JSX.Element;
  title: string;
  price: string;
  zeroMargin?: boolean;
  onClick: () => void;
}

export const PlanCard: React.FC<PlanCardProps> = ({
  selected,
  icon,
  title,
  price,
  zeroMargin,
  onClick,
}) => (
  <PlanCardContainer
    selected={selected}
    onClick={onClick}
    zeroMargin={zeroMargin}
  >
    {icon}
    <Typography style={{ marginTop: '40px' }} variant="body1">
      {title}
    </Typography>
    <Typography variant="body2">{price}</Typography>
  </PlanCardContainer>
);
