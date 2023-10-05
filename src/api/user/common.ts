export interface SignUpParams {
  email: string;
  password: string;
  nickname: string;
  name: string;
  birthDate: string;
  sex: string;
  consentToTermsOfUser: boolean;
  consentToMarketing: boolean;
}
export interface ValidateNicknameParams {
  nickname: string;
}

export interface ValidateEmailParams {
  email: string;
}

export interface LoginParams {
  email: string;
  password: string;
}

export interface ValidateNicknameResult {
  isValid: boolean;
}

export interface ValidateEmailResult {
  isValid: boolean;
}

export interface ValidateLoginResult {
  accessToken: string;
}
