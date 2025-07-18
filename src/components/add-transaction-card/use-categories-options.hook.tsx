import { SelectOption } from '@components/select/types';
import { createCategory, fetchCategories } from '@services/categories';
import {
  CompleteCategoryObject,
  SimpleCategoryObject,
} from '@services/categories/types';
import { useCallback, useMemo, useState } from 'react';

export function useCategoriesOptions() {
  const [categories, setCategories] = useState<SimpleCategoryObject[]>([]);
  const categoriesOptions = useMemo(() => {
    const options = categories.map((category) => ({
      value: category.id,
      label: category.name,
    }));

    options.push({ value: 'add_category', label: 'Adicionar nova categoria' });

    return options;
  }, [categories]);

  const [selectedCategory, setSelectedCategory] = useState<SelectOption>();

  const handleOptionSelected = (option: SelectOption) => {
    setSelectedCategory(option);
  };

  const fetchCategoriesData = useCallback(async () => {
    const fetchedCategories = await fetchCategories();
    setCategories(fetchedCategories);
  }, []);

  const addCategory = useCallback(async (name: string) => {
    try {
      await createCategory(name);
      const categories = await fetchCategories();
      return categories.find(
        (category: CompleteCategoryObject) => category.name === name,
      ).id;
    } catch (error) {
      console.error('Error creating category (temporary log):', error);
    }
  }, []);

  return {
    categoriesOptions,
    selectedCategory,
    handleOptionSelected,
    fetchCategoriesData,
    addCategory,
  };
}
