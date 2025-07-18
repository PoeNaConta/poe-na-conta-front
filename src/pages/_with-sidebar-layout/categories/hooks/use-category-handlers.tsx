import { useCallback, useState } from 'react';
import { SimpleCategoryObject } from '@services/categories/types';
import {
  createCategory,
  fetchCategories,
  removeCategory,
  renameCategory,
} from '@services/categories';
import { AxiosError } from 'axios';

export function useCategoryHandlers(initialCategories: SimpleCategoryObject[]) {
  const [searchValue, setSearchValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [categories, setCategories] =
    useState<SimpleCategoryObject[]>(initialCategories);
  const [filteredCategories, setFilteredCategories] = useState<
    SimpleCategoryObject[]
  >([]);

  const clearError = useCallback(() => {
    setErrorMessage('');
  }, [setErrorMessage]);

  const addCategory = useCallback((name: string) => {
    setSearchValue('');
    setCategories((prev) => [...prev, { id: '', name }]);
    setFilteredCategories((prev) => [...prev, { id: '', name }]);
  }, []);

  const handleAddCategory = useCallback(
    async (name: string) => {
      if (!name) return;

      clearError();
      addCategory(name.trim());

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

  const filterOutCategories = useCallback(
    (id: string) => {
      setCategories((prev) => prev.filter((category) => category.id !== id));
      setFilteredCategories((prev) =>
        prev.filter((category) => category.id !== id),
      );
    },
    [setCategories, setFilteredCategories],
  );

  const handleRemoveCategory = useCallback(
    async (id: string) => {
      clearError();
      filterOutCategories(id);

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

  const editCategory = useCallback(
    (id: string, name: string) => {
      setCategories((prev) =>
        prev.map((category) =>
          category.id === id ? { ...category, name } : category,
        ),
      );
      setFilteredCategories((prev) =>
        prev.map((category) =>
          category.id === id ? { ...category, name } : category,
        ),
      );
    },
    [setCategories, setFilteredCategories],
  );

  const handleEditCategory = useCallback(
    async (id: string) => {
      const newName = prompt('Enter new category name:');
      if (!newName) return;

      clearError();
      editCategory(id, newName.trim());

      try {
        await renameCategory({ id, name: newName });
      } catch (error) {
        if (error instanceof AxiosError) {
          setErrorMessage(
            error.response?.data?.error ?? 'Erro ao editar categoria',
          );
        }
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
