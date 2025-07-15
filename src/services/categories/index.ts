import axios from 'axios';

export async function fetchCategories() {
  const result = await axios.get(
    `${import.meta.env.VITE_BACKEND_ROUTE}/list-all-categories`,
    { headers: { Authorization: `Bearer ${sessionStorage.getItem('jwt')}` } },
  );

  return result.data.map((category: { id: string; name: string }) => ({
    id: category.id,
    name: category.name,
  }));
}

export async function createCategory(body: { name: string }) {
  const result = await axios.post(
    `${import.meta.env.VITE_BACKEND_ROUTE}/create-category`,
    body,
    {
      headers: { Authorization: `Bearer ${sessionStorage.getItem('jwt')}` },
    },
  );

  return result.data.map((category: { id: string; name: string }) => ({
    id: category.id,
    name: category.name,
  }));
}
