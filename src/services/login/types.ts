export interface UserLoginBody {
  useremail: string;
  passwordhash: string;
}

export interface UserLoginResponseData {
  token: string;
  error: never;
}

export interface UserLoginErrorResponseData {
  token: never;
  error: string;
}

export type UserLoginResponse =
  | UserLoginErrorResponseData
  | UserLoginResponseData;
