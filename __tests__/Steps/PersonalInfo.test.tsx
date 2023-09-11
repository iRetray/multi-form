/* eslint-disable @typescript-eslint/ban-ts-comment */
import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { PersonalInfo } from '../../src/MultiStepForm/Steps/PersonalInfo';

describe('<PersonalInfo />', () => {
  beforeEach(() => {
    render(
      // @ts-ignore
      <PersonalInfo updateCurrentStep={() => {}} />,
    );
  });

  it('Render correctly', () => {
    expect(screen.getByText('Personal info')).toBeInTheDocument();
  });

  it('Complete fields and submit form', () => {
    const inputName: HTMLInputElement =
      screen.getByPlaceholderText('e.g. Stephen King');
    fireEvent.input(inputName, { target: { value: 'John Doe' } });
    expect(inputName.value).toBe('John Doe');

    const inputEmail: HTMLInputElement = screen.getByPlaceholderText(
      'e.g. stephenking@lorem.com',
    );
    fireEvent.input(inputEmail, { target: { value: 'mail@mail.com' } });
    expect(inputEmail.value).toBe('mail@mail.com');

    const inputPhone: HTMLInputElement = screen.getByPlaceholderText(
      'e.g. +1 234 567 890',
    );
    fireEvent.input(inputPhone, { target: { value: '123456' } });
    expect(inputPhone.value).toBe('123456');

    const submitButton: HTMLButtonElement = screen.getByText('Next step');
    fireEvent.click(submitButton);
  });
});
