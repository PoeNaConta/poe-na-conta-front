import { useCallback, useState, ChangeEvent, FormEvent } from 'react';
import NewPasswordView from '../view/new-password.view';
import { RequestStatus } from '../types';
import { resetPassword } from '@services/reset-password';
import { Route } from '..';

export default function NewPasswordController() {
  const redirect = Route.useNavigate();
  const { token } = Route.useSearch();
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [requestStatus, setRequestStatus] = useState<RequestStatus>('pending');

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (requestStatus === 'error') return setRequestStatus('pending');

      if (requestStatus === 'sent') return redirect({ to: '/login' });

      try {
        setIsLoading(true);
        await resetPassword(password, token);
        setRequestStatus('sent');
      } catch {
        setRequestStatus('error');
      } finally {
        setIsLoading(false);
      }
    },
    [password, token, requestStatus, setRequestStatus, setIsLoading, redirect],
  );

  return (
    <NewPasswordView
      password={password}
      isLoading={isLoading}
      requestStatus={requestStatus}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
