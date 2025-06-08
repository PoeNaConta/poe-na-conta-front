import { createFileRoute } from '@tanstack/react-router';
import LoginController from '@pages/login/controller/login.controller';

export const Route = createFileRoute('/login/')({
  component: LoginController,
});
