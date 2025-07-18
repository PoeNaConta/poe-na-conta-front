import { Transaction } from '@services/transaction/types';

export interface TransactionsProps {
  debts: Transaction[];
  gains: Transaction[];
}

export interface TransactionListProps {
  title: string;
  transactions: Transaction[];
}
