import { Typography } from '@mui/material';

import { PlanCardContainer } from './styles';

interface PlanCardProps {
  icon: JSX.Element;
  title: string;
  price: string;
  zeroMargin?: boolean;
}

export const PlanCard: React.FC<PlanCardProps> = ({
  icon,
  title,
  price,
  zeroMargin,
}) => (
  <PlanCardContainer zeroMargin={zeroMargin}>
    {icon}
    <Typography style={{ marginTop: '40px' }} variant="body1">
      {title}
    </Typography>
    <Typography variant="body2">{price}</Typography>
  </PlanCardContainer>
);
