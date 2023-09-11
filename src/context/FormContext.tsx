import React, { createContext, useContext, useState } from 'react';

import {
  PersonalInfoFormInterface,
  PickAddOnsFormInterface,
  SelectYourPlanFormInterface,
} from '../MultiStepForm/Steps';
import { Intervals, PlanTypes } from '../constants';

export interface FormContextState {
  PERSONAL_INFO: PersonalInfoFormInterface;
  SELECT_YOUR_PLAN: SelectYourPlanFormInterface;
  PICK_ADD_ONS: PickAddOnsFormInterface;
}

export interface FormContextStateWithActions {
  values: FormContextState;
  updateFormValues: (
    formName: 'PERSONAL_INFO' | 'SELECT_YOUR_PLAN' | 'PICK_ADD_ONS',
    data:
      | PersonalInfoFormInterface
      | SelectYourPlanFormInterface
      | PickAddOnsFormInterface,
  ) => void;
}

const initialState = {
  values: {
    PERSONAL_INFO: {
      name: '',
      email: '',
      phone: '',
    },
    SELECT_YOUR_PLAN: {
      planType: PlanTypes.ARCADE,
      interval: Intervals.MONTHLY,
    },
    PICK_ADD_ONS: {
      onlineService: false,
      largerStorage: false,
      customizableProfile: false,
    },
  },
  updateFormValues: () => {},
};

const FormContext = createContext<FormContextStateWithActions>(initialState);

interface FormContextProviderProps {
  children: JSX.Element;
}

export const FormContextProvider: React.FC<FormContextProviderProps> = ({
  children,
}) => {
  const [values, setValues] = useState<FormContextState>(initialState.values);

  const updateFormValues = (
    formName: 'PERSONAL_INFO' | 'SELECT_YOUR_PLAN' | 'PICK_ADD_ONS',
    data:
      | PersonalInfoFormInterface
      | SelectYourPlanFormInterface
      | PickAddOnsFormInterface,
  ): void => {
    setValues({
      ...values,
      [formName]: data,
    });
  };

  const contextValue: FormContextStateWithActions = {
    values,
    updateFormValues,
  };

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useMyContext must be used within a FormContextProvider');
  }
  return context;
};
