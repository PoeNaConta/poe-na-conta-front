import Card from '@components/card';
import CenterLayout from '@components/center-layout';
import Stack from '@components/stack';
import Text from '@components/text';
import { TransactionsProps } from '../types';
import TransactionList from '../components/transaction-list';
import Modal from '@components/modal';
import EditTransactionCard from '@components/add-transaction-card';

export default function Transactions({
  debts,
  gains,
  editingTransaction,
  isEditModalOpen,
  onToggleEditModal: handleToggleEditModal,
  onRemoveTransaction: handleRemoveTransaction,
  onEditTransaction: handleEditTransaction,
}: TransactionsProps) {
  return (
    <>
      <Modal isOpen={isEditModalOpen} onClose={handleToggleEditModal}>
        <EditTransactionCard
          title="Editar movimentação"
          buttonText={{ default: 'Salvar', loading: 'Salvando...' }}
          initialData={editingTransaction}
          handleSubmit={handleEditTransaction}
          handleCancel={handleToggleEditModal}
        />
      </Modal>

      <CenterLayout
        title="Movimentações"
        height={75}
        width={90}
        justify="start"
      >
        <Stack direction="row" wrap="mobile" fullHeight fullWidth>
          {gains.length > 0 && (
            <TransactionList
              title="Entradas"
              transactions={gains}
              onRemoveTransaction={handleRemoveTransaction}
              onEditTransaction={handleToggleEditModal}
            />
          )}

          {debts.length > 0 && (
            <TransactionList
              title="Saídas"
              transactions={debts}
              onRemoveTransaction={handleRemoveTransaction}
              onEditTransaction={handleToggleEditModal}
            />
          )}

          {gains.length === 0 && debts.length === 0 && (
            <Card fullWidth>
              <Text secondary weight="bold" as="h2" size="lg" center>
                Sem Transações no Momento
              </Text>

              <Text secondary justify>
                Você pode adicionar uma nova transação clicando no botão
                &quot;+&quot;.
              </Text>
            </Card>
          )}
        </Stack>
      </CenterLayout>
    </>
  );
}
