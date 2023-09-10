/* eslint-disable @typescript-eslint/ban-ts-comment */
import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { Finish, Summary } from '../../src/MultiStepForm/Steps';
import { Intervals, PlanTypes } from '../../src/constants';

describe('<Summary />', () => {
  beforeEach(() => {
    render(
      // @ts-ignore
      <Summary
        formValues={{
          personalInfo: {
            name: '',
            email: '',
            phone: '',
          },
          selectYourPlan: {
            planType: PlanTypes.ARCADE,
            interval: Intervals.MONTHLY,
          },
          pickAddOns: {
            onlineService: true,
            largerStorage: true,
            customizableProfile: true,
          },
        }}
        updateCurrentStep={() => {}}
      />,
    );
  });

  it('Render correctly', () => {
    expect(screen.getByText('Finishing up')).toBeInTheDocument();

    const submitButton: HTMLButtonElement = screen.getByText('Confirm');
    fireEvent.click(submitButton);
  });

  it('Go to edit', () => {
    const buttonBack: HTMLButtonElement = screen.getByText('Change');
    fireEvent.click(buttonBack);
  });

  it('Go back', () => {
    const buttonBack: HTMLButtonElement = screen.getByText('Go Back');
    fireEvent.click(buttonBack);
  });
});

describe('<Finish />', () => {
  beforeEach(() => {
    render(
      // @ts-ignore
      <Finish />,
    );
  });

  it('Render correctly', () => {
    expect(screen.getByText('Thank you!')).toBeInTheDocument();
  });
});
