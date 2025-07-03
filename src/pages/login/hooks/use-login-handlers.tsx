import { useCallback, useEffect, useRef, useState } from 'react';
import { UserLoginResponse, UserLoginBody } from '@services/login/types';
import loginService from '@services/login';
import { useNavigate } from '@tanstack/react-router';
import { AxiosError } from 'axios';

export default function useLoginHandlers() {
  const redirect = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userLoginBody, setUserLoginBody] = useState<UserLoginBody>({
    useremail: '',
    passwordhash: '',
  });
  const userLoginBodyRef = useRef(userLoginBody);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = useCallback(
    (key: keyof UserLoginBody, value: string) => {
      setUserLoginBody((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  const handleLogin = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        setIsLoading(true);
        await loginService(userLoginBodyRef.current);
        redirect({ to: '/home' });
      } catch (err) {
        const error = err as AxiosError<UserLoginResponse>;
        const errorMessage = error.response?.data.error;

        setErrorMessage(
          errorMessage ?? 'Algo deu errado ao logar, tente novamente',
        );
      } finally {
        setIsLoading(false);
      }
    },
    [redirect],
  );

  useEffect(() => {
    userLoginBodyRef.current = userLoginBody;
  }, [userLoginBody]);

  return { isLoading, userLoginBody, errorMessage, handleLogin, handleChange };
}
