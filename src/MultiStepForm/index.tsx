import { CardFormContainer, FullscreenContainer } from './styles';

import Sidebar from './Sidebar';
import { useState } from 'react';
import {
  Finish,
  PersonalInfo,
  PickAddOns,
  SelectYourPlan,
  Summary,
} from './Steps';

import { useIsMobile } from '../hooks';

export type Step = 1 | 2 | 3 | 4 | 5;

const MultiStepForm = () => {
  const isMobile = useIsMobile();

  const [step, setStep] = useState<Step>(1);

  const updateCurrentStep = (nextStep: Step): void => {
    setStep(nextStep);
  };

  return (
    <FullscreenContainer>
      {isMobile && <Sidebar activeStep={step} />}
      <CardFormContainer>
        {!isMobile && <Sidebar activeStep={step} />}
        {step === 1 && <PersonalInfo updateCurrentStep={updateCurrentStep} />}
        {step === 2 && <SelectYourPlan updateCurrentStep={updateCurrentStep} />}
        {step === 3 && <PickAddOns updateCurrentStep={updateCurrentStep} />}
        {step === 4 && <Summary updateCurrentStep={updateCurrentStep} />}
        {step === 5 && <Finish />}
      </CardFormContainer>
    </FullscreenContainer>
  );
};

export default MultiStepForm;
