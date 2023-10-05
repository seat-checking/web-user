import { create } from 'zustand';

interface SignUpFormInputs {
  email: string;
  LoginIdUnique: string;
  password: string;
  confirmPassword?: string;
  consentToTermsOfUser: boolean;
  consentToMarketing: boolean;
}

interface FormStore {
  formState: SignUpFormInputs | null;
  setFormState: (inputs: SignUpFormInputs) => void;
}

export const useFromStore = create<FormStore>((set) => ({
  formState: null,
  setFormState: (inputs) => set({ formState: inputs }),
}));
