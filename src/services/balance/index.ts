import axios from 'axios';

export async function fetchTotalBalance() {
  const result = await axios.get(
    `${import.meta.env.VITE_BACKEND_ROUTE}/balanceTotal`,
    { headers: { Authorization: `Bearer ${sessionStorage.getItem('jwt')}` } },
  );

  return result.data;
}

export async function fetchGainsBalance() {
  const result = await axios.get(
    `${import.meta.env.VITE_BACKEND_ROUTE}/balanceGains`,
    { headers: { Authorization: `Bearer ${sessionStorage.getItem('jwt')}` } },
  );

  return result.data;
}

export async function fetchDebtsBalance() {
  const result = await axios.get(
    `${import.meta.env.VITE_BACKEND_ROUTE}/balanceDebts`,
    { headers: { Authorization: `Bearer ${sessionStorage.getItem('jwt')}` } },
  );

  return result.data;
}

export async function fetchBalanceCategories() {
  const result = await axios.get(
    `${import.meta.env.VITE_BACKEND_ROUTE}/balanceCategories`,
    { headers: { Authorization: `Bearer ${sessionStorage.getItem('jwt')}` } },
  );

  return result.data;
}
