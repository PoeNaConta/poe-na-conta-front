import Categories from '../view/categories.view';
import { Route } from '..';
import { useCategoryHandlers } from '../hooks/use-category-handlers';

export default function CategoriesController() {
  const initialCategories = Route.useLoaderData();

  const {
    searchValue,
    errorMessage,
    categories,
    handleAddCategory,
    handleChangeSearch,
    handleRemoveCategory,
    handleEditCategory,
  } = useCategoryHandlers(initialCategories);

  return (
    <Categories
      categories={categories}
      searchValue={searchValue}
      errorMessage={errorMessage}
      handleChangeSearch={handleChangeSearch}
      handleAddCategory={handleAddCategory}
      handleRemoveCategory={handleRemoveCategory}
      handleEditCategory={handleEditCategory}
    />
  );
}
