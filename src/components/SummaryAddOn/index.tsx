import { Typography } from '@mui/material';

import { SummaryAddOnContainer } from './styles';
import { COLORS } from '../../constants';

interface AddOnProps {
  name: string;
  price: string;
}

export const SummaryAddOn: React.FC<AddOnProps> = ({ name, price }) => (
  <SummaryAddOnContainer>
    <Typography variant="body2">{name}</Typography>
    <Typography variant="h3" style={{ color: COLORS.primary }}>
      {price}
    </Typography>
  </SummaryAddOnContainer>
);
