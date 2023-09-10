import { CardFormContainer, FullscreenContainer } from './styles';

import Sidebar from './Sidebar';
import { useState } from 'react';
import {
  Finish,
  PersonalInfo,
  PersonalInfoFormInterface,
  PickAddOns,
  PickAddOnsFormInterface,
  SelectYourPlan,
  SelectYourPlanFormInterface,
  Summary,
} from './Steps';

export type Step = 1 | 2 | 3 | 4 | 5;

export interface FormValuesState {
  personalInfo: PersonalInfoFormInterface;
  selectYourPlan: SelectYourPlanFormInterface;
  pickAddOns: PickAddOnsFormInterface;
}

const MultiStepForm = () => {
  const [step, setStep] = useState<Step>(1);
  const [formValues, setFormValues] = useState<FormValuesState>({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
    },
    selectYourPlan: {
      planType: 'ARCADE',
      interval: 'MONTHLY',
    },
    pickAddOns: {
      onlineService: false,
      largerStorage: false,
      customizableProfile: false,
    },
  });

  const updateCurrentStep = (nextStep: Step): void => {
    setStep(nextStep);
  };

  const updateFormData = (
    formName: string,
    data:
      | PersonalInfoFormInterface
      | SelectYourPlanFormInterface
      | PickAddOnsFormInterface,
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
        {step === 2 && (
          <SelectYourPlan
            initialValues={formValues.selectYourPlan}
            onFormSubmited={data => updateFormData('selectYourPlan', data)}
            updateCurrentStep={updateCurrentStep}
          />
        )}
        {step === 3 && (
          <PickAddOns
            initialValues={formValues.pickAddOns}
            onFormSubmited={data => updateFormData('pickAddOns', data)}
            updateCurrentStep={updateCurrentStep}
          />
        )}
        {step === 4 && (
          <Summary
            formValues={formValues}
            updateCurrentStep={updateCurrentStep}
          />
        )}
        {step === 5 && <Finish />}
      </CardFormContainer>
    </FullscreenContainer>
  );
};

export default MultiStepForm;
