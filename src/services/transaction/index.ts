import axios from 'axios';
import { Transaction } from './types';

export async function createTransaction(transaction: Transaction) {
  await axios.post(
    `${import.meta.env.VITE_BACKEND_ROUTE}/transactions/create`,
    transaction,
    {
      headers: { Authorization: `Bearer ${sessionStorage.getItem('jwt')}` },
    },
  );
}

export async function fetchTransactions() {
  const response = await axios.get<Transaction[]>(
    `${import.meta.env.VITE_BACKEND_ROUTE}/transactions/list-all-transactions`,
    {
      headers: { Authorization: `Bearer ${sessionStorage.getItem('jwt')}` },
    },
  );

  return response.data;
}

export async function removeTransaction(id: number) {
  const response = await axios.delete(
    `${import.meta.env.VITE_BACKEND_ROUTE}/transactions/delete`,
    {
      data: { id },
      headers: { Authorization: `Bearer ${sessionStorage.getItem('jwt')}` },
    },
  );

  return response.data;
}

export async function updateTransaction(transaction: Transaction) {
  const response = await axios.patch(
    `${import.meta.env.VITE_BACKEND_ROUTE}/transactions/update`,
    transaction,
    {
      headers: { Authorization: `Bearer ${sessionStorage.getItem('jwt')}` },
    },
  );

  return response.data;
}
