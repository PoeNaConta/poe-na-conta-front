import { createFileRoute } from '@tanstack/react-router';
import VerifyEmailController from './controller/verify-email.controller';

export const Route = createFileRoute('/verify-email/')({
  component: VerifyEmailController,
});
