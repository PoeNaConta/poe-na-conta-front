import { createFileRoute } from '@tanstack/react-router';
import CategoriesController from './controller/categories.controller';

export const Route = createFileRoute('/_with-sidebar-layout/categories/')({
  component: CategoriesController,
});
