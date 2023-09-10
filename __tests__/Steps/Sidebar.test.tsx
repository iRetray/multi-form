/* eslint-disable @typescript-eslint/ban-ts-comment */
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import Sidebar from '../../src/MultiStepForm/Sidebar';

describe('<Summary />', () => {
  it('Render step 1', () => {
    render(
      // @ts-ignore
      <Sidebar activeStep={1} />,
    );

    expect(screen.getByText('YOUR INFO')).toBeInTheDocument();
  });
});
