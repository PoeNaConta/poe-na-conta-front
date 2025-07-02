import axios from 'axios';
import { LoginResponse, UserLoginBody } from './types';

export default async function loginService(userLogin: UserLoginBody) {
  const result = await axios.post<LoginResponse>(
    `${import.meta.env.VITE_BACKEND_ROUTE}/login`,
    userLogin,
  );
  const jwt = result.data.token;
  sessionStorage.setItem('jwt', jwt);
}
