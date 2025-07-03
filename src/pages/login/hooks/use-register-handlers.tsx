import registerService from '@services/register';
import {
  UserRegisterBody,
  UserRegisterResponse,
} from '@services/register/types';
// import { useNavigate } from '@tanstack/react-router';
import { AxiosError } from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';

export default function useLoginHandlers() {
  //   const redirect = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [userRegisterBody, setUserRegisterBody] = useState<UserRegisterBody>({
    name: '',
    useremail: '',
    passwordhash: '',
  });
  const userRegisterBodyRef = useRef(userRegisterBody);

  const handleChange = useCallback(
    (key: keyof UserRegisterBody, value: string) => {
      setUserRegisterBody((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  const handleRegister = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        setIsLoading(true);
        await registerService(userRegisterBodyRef.current);
        // redirect({ to: '/home' });
      } catch (err) {
        const error = err as AxiosError<UserRegisterResponse>;
        const errorMessage = error.response?.data.error;

        setErrorMessage(
          errorMessage ?? 'Algo deu errado ao registrar, tente novamente',
        );
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  useEffect(() => {
    userRegisterBodyRef.current = userRegisterBody;
  }, [userRegisterBody]);

  return {
    isLoading,
    errorMessage,
    userRegisterBody,
    handleChange,
    handleRegister,
  };
}
