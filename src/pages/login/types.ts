import { UserLoginBody } from '@services/login/types';

export interface LoginViewProps {
  isLoadingLogin: boolean;
  userLoginBody: UserLoginBody;
  errorMessage: string;
  onLogin: (e: React.FormEvent<HTMLFormElement>) => void;
  onLoginChange: (key: keyof UserLoginBody, value: string) => void;
}

export interface LoginFormProps {
  isLoadingLogin: boolean;
  userLoginBody: UserLoginBody;
  errorMessage: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (key: keyof UserLoginBody, value: string) => void;
}
