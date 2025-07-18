import { useCallback, useState } from 'react';
import { CategoryObject } from '../types';
import {
  createCategory,
  fetchCategories,
  removeCategory,
} from '@services/categories';
import { AxiosError } from 'axios';

export function useCategoryHandlers(initialCategories: CategoryObject[]) {
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
        await createCategory(name.trim());

        const updatedCategories = await fetchCategories();

        setCategories(updatedCategories);
        setFilteredCategories(updatedCategories);
      } catch (error) {
        if (error instanceof AxiosError) {
          setErrorMessage(
            error.response?.data?.message ?? 'Erro ao criar categoria',
          );
        }
      }
    },
    [setCategories, setFilteredCategories, setErrorMessage, setSearchValue],
  );

  const handleRemoveCategory = useCallback(
    async (id: string) => {
      setCategories((prev) => prev.filter((category) => category.id !== id));
      setFilteredCategories((prev) =>
        prev.filter((category) => category.id !== id),
      );

      try {
        await removeCategory(id);
      } catch (error) {
        if (error instanceof AxiosError) {
          setErrorMessage(
            error.response?.data?.error ?? 'Erro ao remover categoria',
          );
        }
      }
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

  const handleChangeSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);
    },
    [setSearchValue],
  );

  const filterCategories = useCallback(() => {
    if (searchValue) {
      setFilteredCategories(
        categories.filter((category) =>
          category.name.toLowerCase().includes(searchValue.toLowerCase()),
        ),
      );
    } else {
      setFilteredCategories(categories);
    }
  }, [searchValue, categories, setFilteredCategories]);

  return {
    categories: filteredCategories,
    searchValue,
    errorMessage,
    handleChangeSearch,
    handleAddCategory,
    handleRemoveCategory,
    handleEditCategory,
    filterCategories,
  };
}
