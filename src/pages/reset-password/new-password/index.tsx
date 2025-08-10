import { createFileRoute } from '@tanstack/react-router';
import NewPasswordController from './controller/new-password.controller';
import { NewPasswordSearchParams } from './types';

export const Route = createFileRoute('/reset-password/new-password/')({
  validateSearch: (
    search: Record<string, unknown>,
  ): NewPasswordSearchParams => {
    return {
      token: (search?.token as string) || '',
    };
  },
  component: NewPasswordController,
});
