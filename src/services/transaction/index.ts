import axios from 'axios';

export async function createTransaction(transaction: {
  title: string;
  balance: string;
  category_id: string;
  description?: string;
  createdat?: string;
}) {
  await axios.post(
    `${import.meta.env.VITE_BACKEND_ROUTE}/transactions/create`,
    transaction,
    {
      headers: { Authorization: `Bearer ${sessionStorage.getItem('jwt')}` },
    },
  );
}
