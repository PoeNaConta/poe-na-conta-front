import { createFileRoute } from '@tanstack/react-router';
import SendEmailController from './controller/send-email.controller';

export const Route = createFileRoute('/reset-password/(send-email)/')({
  component: SendEmailController,
});
