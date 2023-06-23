export interface Token {
  accessToken: string;
  refreshToken: string;
}

export interface Profile {
  id: number;
  name: string;
  email: string;
  avatar: string;
  role: string;
  password: string;
}
