import { createContext, useState, useContext } from 'react';
import type { VFC } from 'common/utils/types';
import type { ReactNode } from 'react';
import type React from 'react';

interface SignUpFormInputs {
  email: string;
  LoginIdUnique: string;
  password: string;
  confirmPassword: string;
  consentToTermsOfUser: boolean;
  consentToMarketing: boolean;
}

interface FormContextProps {
  formState: SignUpFormInputs | null;
  setFormState: React.Dispatch<React.SetStateAction<SignUpFormInputs | null>>;
}

const FormContext = createContext<FormContextProps | null>(null);

export const FormProvider: VFC<{ children: ReactNode }> = ({ children }) => {
  const [formState, setFormState] = useState<SignUpFormInputs | null>(null);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <FormContext.Provider value={{ formState, setFormState }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormState = () => {
  const context = useContext(FormContext);
  if (context === null) {
    throw new Error('useFormState must be used within a FormProvider');
  }
  return context;
};
