import { ThemeProvider, GlobalStyles } from '@mui/material';
import { theme } from './config';

import MultiStepForm from './MultiStepForm';
import { COLORS } from './constants';
import { FormContextProvider } from './context';

const FormApp = () => (
  <FormContextProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          body: { backgroundColor: COLORS.greySoft, margin: '0px' },
        }}
      />
      <MultiStepForm />
    </ThemeProvider>
  </FormContextProvider>
);

export default FormApp;
