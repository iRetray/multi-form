import { CardFormContainer, FullscreenContainer } from './styles';

import Sidebar from './Sidebar';
import { useState } from 'react';
import { PersonalInfo, SelectYourPlan } from './Steps';

export type Step = 1 | 2 | 3 | 4;

const MultiStepForm = () => {
  const [step, setStep] = useState<Step>(1);

  const updateCurrentStep = (nextStep: Step): void => {
    setStep(nextStep);
  };

  return (
    <FullscreenContainer>
      <CardFormContainer>
        <Sidebar />
        {step === 1 && <PersonalInfo updateCurrentStep={updateCurrentStep} />}
        {step === 2 && <SelectYourPlan updateCurrentStep={updateCurrentStep} />}
      </CardFormContainer>
    </FullscreenContainer>
  );
};

export default MultiStepForm;
