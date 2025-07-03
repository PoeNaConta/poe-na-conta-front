import axios from 'axios';
import { UserRegisterBody, UserRegisterResponse } from './types';

export default async function registerService(
  userRegisterBody: UserRegisterBody,
) {
  const result = await axios.post<UserRegisterResponse>(
    `${import.meta.env.VITE_BACKEND_ROUTE}/users`,
    userRegisterBody,
  );

  return result;
}
