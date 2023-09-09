import { ThemeProvider, GlobalStyles } from '@mui/material';
import { theme } from './config';

import MultiStepForm from './MultiStepForm';

const FormApp = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles
      styles={{
        body: { backgroundColor: '#EFF5FF' },
      }}
    />
    <MultiStepForm />
  </ThemeProvider>
);

export default FormApp;
