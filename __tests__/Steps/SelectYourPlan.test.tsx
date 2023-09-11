/* eslint-disable @typescript-eslint/ban-ts-comment */
import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { SelectYourPlan } from '../../src/MultiStepForm/Steps';

describe('<SelectYourPlan />', () => {
  beforeEach(() => {
    render(
      // @ts-ignore
      <SelectYourPlan updateCurrentStep={() => {}} />,
    );
  });

  it('Render correctly', () => {
    expect(screen.getByText('Select your plan')).toBeInTheDocument();
  });

  it('Press cards plan', () => {
    const proCard: HTMLDivElement = screen.getByText('Pro');
    fireEvent.click(proCard);

    const advancedCard: HTMLDivElement = screen.getByText('Advanced');
    fireEvent.click(advancedCard);

    const arcadeCard: HTMLDivElement = screen.getByText('Arcade');
    fireEvent.click(arcadeCard);

    const switchInput: HTMLDivElement = screen.getByRole('checkbox');
    fireEvent.click(switchInput);

    const submitButton: HTMLButtonElement = screen.getByText('Next step');
    fireEvent.click(submitButton);
  });

  it('Go back', () => {
    const buttonBack: HTMLButtonElement = screen.getByText('Go Back');
    fireEvent.click(buttonBack);
  });
});
