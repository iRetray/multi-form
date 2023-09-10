import { CardFormContainer, FullscreenContainer } from './styles';

import Sidebar from './Sidebar';
import { useState } from 'react';
import {
  Finish,
  PersonalInfo,
  PersonalInfoFormInterface,
  PickAddOns,
  SelectYourPlan,
  Summary,
} from './Steps';

export type Step = 1 | 2 | 3 | 4 | 5;

interface FormValuesState {
  personalInfo: PersonalInfoFormInterface;
}

const MultiStepForm = () => {
  const [step, setStep] = useState<Step>(1);
  const [formValues, setFormValues] = useState<FormValuesState>({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
    },
  });

  const updateCurrentStep = (nextStep: Step): void => {
    setStep(nextStep);
  };

  const updateFormData = (
    formName: string,
    data: PersonalInfoFormInterface,
  ): void => {
    setFormValues({
      ...formValues,
      [formName]: data,
    });
  };

  return (
    <FullscreenContainer>
      <CardFormContainer>
        <Sidebar activeStep={step} />
        {step === 1 && (
          <PersonalInfo
            initialValues={formValues.personalInfo}
            onFormSubmited={data => updateFormData('personalInfo', data)}
            updateCurrentStep={updateCurrentStep}
          />
        )}
        {step === 2 && <SelectYourPlan updateCurrentStep={updateCurrentStep} />}
        {step === 3 && <PickAddOns updateCurrentStep={updateCurrentStep} />}
        {step === 4 && <Summary updateCurrentStep={updateCurrentStep} />}
        {step === 5 && <Finish />}
      </CardFormContainer>
    </FullscreenContainer>
  );
};

export default MultiStepForm;
