/* eslint-disable @typescript-eslint/ban-ts-comment */
import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { PickAddOns } from '../../src/MultiStepForm/Steps';

describe('<PickAddOns />', () => {
  beforeEach(() => {
    render(
      // @ts-ignore
      <PickAddOns
        initialValues={{
          onlineService: false,
          largerStorage: false,
          customizableProfile: false,
        }}
        onFormSubmited={() => {}}
        updateCurrentStep={() => {}}
      />,
    );
  });

  it('Render correctly', () => {
    expect(screen.getByText('Pick add-ons')).toBeInTheDocument();
  });

  it('Press check cards for Add Ons', () => {
    const onlineServiceCard: HTMLDivElement =
      screen.getByText('Online service');
    fireEvent.click(onlineServiceCard);

    const largerStorageCard: HTMLDivElement =
      screen.getByText('Larger storage');
    fireEvent.click(largerStorageCard);

    const customizeProfileCard: HTMLDivElement = screen.getByText(
      'Customizable profile',
    );
    fireEvent.click(customizeProfileCard);

    const submitButton: HTMLButtonElement = screen.getByText('Next step');
    fireEvent.click(submitButton);
  });

  it('Go back', () => {
    const buttonBack: HTMLButtonElement = screen.getByText('Go Back');
    fireEvent.click(buttonBack);
  });
});
