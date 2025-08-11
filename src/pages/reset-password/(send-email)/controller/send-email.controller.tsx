import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import SendEmailView from '../view/send-email.view';
import { sendResetPasswordRequest } from '@services/reset-password';
import { RequestStatus } from '../types';

export default function SendEmailController() {
  const [email, setEmail] = useState<string>('');
  const [status, setStatus] = useState<RequestStatus>('pending');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    [setEmail],
  );

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (status === 'error') return setStatus('pending');

      try {
        setIsLoading(true);
        await sendResetPasswordRequest(email);
        setStatus('sent');
      } catch {
        setStatus('error');
      } finally {
        setIsLoading(false);
      }
    },
    [status, email, setStatus, setIsLoading],
  );

  return (
    <SendEmailView
      email={email}
      isLoading={isLoading}
      requestStatus={status}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
