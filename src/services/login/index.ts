import axios from 'axios';
import { UserLoginResponse, UserLoginBody } from './types';

export default async function loginService(userLogin: UserLoginBody) {
  const result = await axios.post<UserLoginResponse>(
    `${import.meta.env.VITE_BACKEND_ROUTE}/login`,
    userLogin,
  );
  const jwt = result.data.token;
  sessionStorage.setItem('jwt', jwt);

  return result;
}
