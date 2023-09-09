import { Typography, Checkbox } from '@mui/material';

import { AddOnContainer } from './styles';

interface AddOnProps {
  checked?: boolean;
  title: string;
  subtitle: string;
  price: string;
}

export const AddOn: React.FC<AddOnProps> = ({
  checked,
  title,
  subtitle,
  price,
}) => (
  <AddOnContainer checked={checked}>
    <Checkbox style={{ marginLeft: '-12px', marginRight: '12px' }} />
    <div>
      <Typography variant="body1">{title}</Typography>
      <Typography variant="body2">{subtitle}</Typography>
    </div>
    <Typography variant="h3" style={{ color: '#483EFF', marginLeft: 'auto' }}>
      {price}
    </Typography>
  </AddOnContainer>
);
