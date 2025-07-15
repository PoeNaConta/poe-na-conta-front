import { useCallback, useState } from 'react';
import { CategoryObject } from '../types';
import Categories from '../view/categories.view';
// import { Route } from '..';

export default function CategoriesController() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [categories, setCategories] = useState<CategoryObject[]>([]);

  const handleAddCategory = useCallback(
    (name: string) => {
      setCategories((prev) => [...prev, { id: Date.now().toString(), name }]);
      setSearchValue('');
    },
    [setCategories],
  );

  const handleChangeSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);
    },
    [setSearchValue],
  );

  const handleRemoveCategory = useCallback(
    (id: string) => {
      setCategories((prev) => prev.filter((category) => category.id !== id));
    },
    [setCategories],
  );

  const handleEditCategory = useCallback(
    (id: string) => {
      const newName = prompt('Enter new category name:');
      if (newName) {
        setCategories((prev) =>
          prev.map((category) =>
            category.id === id ? { ...category, name: newName } : category,
          ),
        );
      }
    },
    [setCategories],
  );

  return (
    <Categories
      categories={categories}
      searchValue={searchValue}
      handleChangeSearch={handleChangeSearch}
      handleAddCategory={handleAddCategory}
      handleRemoveCategory={handleRemoveCategory}
      handleEditCategory={handleEditCategory}
    />
  );
}
