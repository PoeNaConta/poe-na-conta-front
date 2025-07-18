import { createFileRoute } from '@tanstack/react-router';
import TransactionsController from './controller/transactions.controller';
import { fetchTransactions } from '@services/transaction';

export const Route = createFileRoute('/_with-sidebar-layout/transactions/')({
  loader: async () => {
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
  },
  component: TransactionsController,
});
