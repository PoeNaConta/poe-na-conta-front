import { Transaction } from '@services/transaction/types';

export interface AddTransactionCardProps {
  handleCancel: () => void;
  handleSubmit?: (transactionData: Transaction) => Promise<void>;
  buttonText?: {
    default: string;
    loading: string;
  };
  initialData?: Transaction;
  title?: string;
}
