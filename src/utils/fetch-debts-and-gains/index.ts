import { fetchTransactions } from '@services/transaction';

export async function fetchDebtsAndGains() {
  const transactions = await fetchTransactions();

  const debts = transactions.filter(
    (transaction) => Number(transaction.balance) < 0,
  );
  const gains = transactions.filter(
    (transaction) => Number(transaction.balance) >= 0,
  );

  return {
    transactions,
    debts,
    gains,
  };
}
