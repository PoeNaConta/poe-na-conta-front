import { createFileRoute } from '@tanstack/react-router';
import CategoriesController from './controller/categories.controller';
import { fetchCategories } from '@services/categories';

export const Route = createFileRoute('/_with-sidebar-layout/categories/')({
  loader: async () => {
    const categories = await fetchCategories();
    return categories;
  },
  component: CategoriesController,
});
