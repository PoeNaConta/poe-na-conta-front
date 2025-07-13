import { useCallback } from 'react';
import VerifyEmail from '../view/verify-email.view';
import { useNavigate } from '@tanstack/react-router';

export default function VerifyEmailController() {
  const redirect = useNavigate();

  const handleGoToHome = useCallback(() => {
    redirect({ to: '/login' });
  }, [redirect]);

  return <VerifyEmail handleGoToHome={handleGoToHome} />;
}
