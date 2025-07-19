import { Transaction } from '@services/transaction/types';

export interface TransactionsProps {
  debts: Transaction[];
  gains: Transaction[];
  editingTransaction?: Transaction;
  isEditModalOpen: boolean;
  onToggleEditModal: (id?: number) => void;
  onRemoveTransaction: (id: number) => Promise<void>;
  onEditTransaction: (transactionData: Transaction) => Promise<void>;
}

export interface TransactionListProps {
  title: string;
  transactions: Transaction[];
  onRemoveTransaction: (id: number) => Promise<void>;
  onEditTransaction: (id: number) => void;
}
