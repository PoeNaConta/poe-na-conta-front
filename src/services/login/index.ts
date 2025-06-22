import axios from 'axios';
import { UserLoginBody } from './types';

export default async function loginService(userLogin: UserLoginBody) {
  const result = await axios.post(
    `${import.meta.env.BACKEND_ROUTE}/login`,
    userLogin,
  );
  const jwt = result.data.token;
  sessionStorage.setItem('jwt', jwt);
}
