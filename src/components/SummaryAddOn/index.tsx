import { Typography } from '@mui/material';

import { SummaryAddOnContainer } from './styles';

interface AddOnProps {
  name: string;
  price: string;
}

export const SummaryAddOn: React.FC<AddOnProps> = ({ name, price }) => (
  <SummaryAddOnContainer>
    <Typography variant="body2">{name}</Typography>
    <Typography variant="h3" style={{ color: '#022959' }}>
      {price}
    </Typography>
  </SummaryAddOnContainer>
);
