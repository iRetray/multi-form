/* eslint-disable @typescript-eslint/ban-ts-comment */
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { PersonalInfo } from '../../src/MultiStepForm/Steps/PersonalInfo';

describe('<PersonalInfo />', () => {
  it('Render correctly', () => {
    const initialValues = {
      name: '',
      email: '',
      phone: '',
    };
    const onFormSubmited = jest.fn();
    const updateCurrentStep = jest.fn();

    render(
      // @ts-ignore
      <PersonalInfo
        initialValues={initialValues}
        onFormSubmited={onFormSubmited}
        updateCurrentStep={updateCurrentStep}
      />,
    );

    screen.getByPlaceholderText('e.g. Stephen King');
    expect(
      screen.getByPlaceholderText('e.g. Stephen King'),
    ).toBeInTheDocument();
  });
});
