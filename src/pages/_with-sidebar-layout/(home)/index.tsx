import { createFileRoute } from '@tanstack/react-router';
import HomeController from './controller/home.controller';

export const Route = createFileRoute('/_with-sidebar-layout/(home)/')({
  component: HomeController,
});

export default HomeController;
