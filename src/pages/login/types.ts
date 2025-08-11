import { UserLoginBody } from '@services/login/types';
import { UserRegisterBody } from '@services/register/types';

export interface LoginViewProps {
  registerFormProps: RegisterFormProps;
  loginFormProps: LoginFormProps;
}

export interface RegisterFormProps {
  isLoading: boolean;
  userRegisterBody: UserRegisterBody;
  errorMessage: string;
  handleRegister: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (key: keyof UserRegisterBody, value: string) => void;
}

export interface LoginFormProps {
  isLoading: boolean;
  userLoginBody: UserLoginBody;
  errorMessage: string;
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (key: keyof UserLoginBody, value: string) => void;
  handleForgotPassword: () => void;
}
