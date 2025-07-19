import { useCallback, useMemo, useState } from 'react';
import { Route } from '..';
import Transactions from '../view/transactions.view';
import { removeTransaction, updateTransaction } from '@services/transaction';
import { fetchDebtsAndGains } from '../utils/fetch-debts-and-gains';
import { Transaction } from '@services/transaction/types';

export default function TransactionsController() {
  const { debts: initialDebts, gains: initialGains } = Route.useLoaderData();

  const [debts, setDebts] = useState(initialDebts);
  const [gains, setGains] = useState(initialGains);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentEditingId, setCurrentEditingId] = useState<number>();
  const editingTransaction = useMemo(
    () =>
      [...debts, ...gains].find(
        (transaction) => transaction.id === currentEditingId,
      ),
    [debts, gains, currentEditingId],
  );

  const handleRemoveTransaction = useCallback(
    async (id: number) => {
      setDebts((prev) => prev.filter((transaction) => transaction.id !== id));
      setGains((prev) => prev.filter((transaction) => transaction.id !== id));

      await removeTransaction(id);
      await fetchDebtsAndGains();
    },
    [setDebts, setGains, removeTransaction, fetchDebtsAndGains],
  );

  const handleEditTransaction = useCallback(
    async (transactionData: Transaction) => {
      transactionData.id = currentEditingId;
      await updateTransaction(transactionData);

      setDebts((prev) =>
        prev.map((transaction) =>
          transaction.id === currentEditingId ? transactionData : transaction,
        ),
      );
      setGains((prev) =>
        prev.map((transaction) =>
          transaction.id === currentEditingId ? transactionData : transaction,
        ),
      );
    },
    [currentEditingId, updateTransaction],
  );

  const handleToggleEditModal = useCallback(
    (id?: number) => {
      setIsEditModalOpen((prev) => !prev);
      setCurrentEditingId(id);
    },
    [setIsEditModalOpen],
  );

  return (
    <Transactions
      debts={debts}
      gains={gains}
      editingTransaction={editingTransaction}
      isEditModalOpen={isEditModalOpen}
      onToggleEditModal={handleToggleEditModal}
      onRemoveTransaction={handleRemoveTransaction}
      onEditTransaction={handleEditTransaction}
    />
  );
}
