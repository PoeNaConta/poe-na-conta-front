import { createFileRoute } from '@tanstack/react-router';
import HomeController from './controller/home.controller';

export const Route = createFileRoute('/home/')({
  component: HomeController,
});

export default HomeController;
