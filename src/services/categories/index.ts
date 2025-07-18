import axios from 'axios';
import { SimpleCategoryObject } from './types';

export async function fetchCategories() {
  const result = await axios.get(
    `${import.meta.env.VITE_BACKEND_ROUTE}/list-all-categories`,
    { headers: { Authorization: `Bearer ${sessionStorage.getItem('jwt')}` } },
  );

  return result.data;
}

export async function createCategory(name: string) {
  await axios.post(
    `${import.meta.env.VITE_BACKEND_ROUTE}/create-category`,
    { name },
    {
      headers: { Authorization: `Bearer ${sessionStorage.getItem('jwt')}` },
    },
  );
}

export async function removeCategory(id: string) {
  await axios.delete(`${import.meta.env.VITE_BACKEND_ROUTE}/delete-category`, {
    headers: { Authorization: `Bearer ${sessionStorage.getItem('jwt')}` },
    data: { id },
  });
}

export async function renameCategory(updatedCategory: SimpleCategoryObject) {
  await axios.patch(
    `${import.meta.env.VITE_BACKEND_ROUTE}/update-category`,
    updatedCategory,
    { headers: { Authorization: `Bearer ${sessionStorage.getItem('jwt')}` } },
  );
}
