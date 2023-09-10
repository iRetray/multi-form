import { ThemeProvider, GlobalStyles } from '@mui/material';
import { theme } from './config';

import MultiStepForm from './MultiStepForm';
import { COLORS } from './constants';

const FormApp = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles
      styles={{
        body: { backgroundColor: COLORS.greySoft },
      }}
    />
    <MultiStepForm />
  </ThemeProvider>
);

export default FormApp;
