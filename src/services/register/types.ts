export interface UserRegisterBody {
  name: string;
  useremail: string;
  passwordhash: string;
}

export interface UserRegisterResponseData {
  message: string;
  error: never;
}

export interface UserRegisterErrorResponseData {
  message: never;
  error: string;
}

export type UserRegisterResponse =
  | UserRegisterErrorResponseData
  | UserRegisterResponseData;
