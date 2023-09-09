import { Button } from '@mui/material';

import { CardFormContainer } from './styles';

import Sidebar from './Sidebar';

const MultiStepForm = () => {
  return (
    <CardFormContainer>
      <Sidebar />
      <Button variant="contained">Next step</Button>
    </CardFormContainer>
  );
};

export default MultiStepForm;
