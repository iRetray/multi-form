import { Typography } from '@mui/material';

import { PlanCardContainer, TextContainer } from './styles';
import { useIsMobile } from '../../hooks';

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
}) => {
  const isMobile = useIsMobile();

  return (
    <PlanCardContainer
      selected={selected}
      onClick={onClick}
      zeroMargin={zeroMargin}
    >
      {icon}
      <TextContainer>
        <Typography
          style={isMobile ? {} : { marginTop: '40px' }}
          variant="body1"
        >
          {title}
        </Typography>
        <Typography variant="body2">{price}</Typography>
      </TextContainer>
    </PlanCardContainer>
  );
};
