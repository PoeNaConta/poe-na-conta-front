import { createFileRoute } from '@tanstack/react-router';
import CategoriesController from './controller/categories.controller';
import { fetchCategories } from '@services/categories';
import LoadingPage from '@components/loading-page';

export const Route = createFileRoute('/_with-sidebar-layout/categories/')({
  loader: fetchCategories,
  pendingComponent: LoadingPage,
  pendingMs: 50,
  component: CategoriesController,
});
