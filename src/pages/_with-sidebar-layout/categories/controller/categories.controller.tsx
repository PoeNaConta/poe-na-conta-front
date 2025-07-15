import { useCallback, useEffect, useState } from 'react';
import { CategoryObject } from '../types';
import Categories from '../view/categories.view';
import { Route } from '..';
import { createCategory, fetchCategories } from '@services/categories';
import { AxiosError } from 'axios';

export default function CategoriesController() {
  const initialCategories = Route.useLoaderData();

  const [searchValue, setSearchValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [categories, setCategories] =
    useState<CategoryObject[]>(initialCategories);
  const [filteredCategories, setFilteredCategories] = useState<
    CategoryObject[]
  >([]);

  const handleAddCategory = useCallback(
    async (name: string) => {
      if (!name) return;
      setSearchValue('');
      setErrorMessage('');
      setCategories((prev) => [...prev, { id: '', name }]);
      try {
        await createCategory({ name: name.trim() });
        const updatedCategories = await fetchCategories();
        setCategories(updatedCategories);
        setFilteredCategories(updatedCategories);
      } catch (error) {
        if (error instanceof AxiosError) {
          setErrorMessage(
            error.response?.data?.error ?? 'Erro ao criar categoria',
          );
        }
      }
    },
    [setCategories, setFilteredCategories, setErrorMessage, setSearchValue],
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

  useEffect(() => {
    if (searchValue) {
      setFilteredCategories(
        categories.filter((category) =>
          category.name.toLowerCase().includes(searchValue.toLowerCase()),
        ),
      );
    } else {
      setFilteredCategories(categories);
    }
  }, [searchValue, categories]);

  return (
    <Categories
      categories={filteredCategories}
      searchValue={searchValue}
      errorMessage={errorMessage}
      handleChangeSearch={handleChangeSearch}
      handleAddCategory={handleAddCategory}
      handleRemoveCategory={handleRemoveCategory}
      handleEditCategory={handleEditCategory}
    />
  );
}
