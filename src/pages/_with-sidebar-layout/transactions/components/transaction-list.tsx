import Card from '@components/card';
import Stack from '@components/stack';
import Text from '@components/text';
import Transaction from './transaction';
import { TransactionListProps } from '../types';

export default function TransactionList({
  title,
  transactions,
  onRemoveTransaction: handleRemoveTransaction,
  onEditTransaction: handleEditTransaction,
}: TransactionListProps) {
  return (
    <Card fullWidth>
      <Text secondary weight="bold" as="h2" size="lg" center>
        {title}
      </Text>

      <Stack space="xl" fullWidth>
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            {...transaction}
            onRemove={() => handleRemoveTransaction(transaction.id!)}
            onEdit={() => handleEditTransaction(transaction.id!)}
          />
        ))}
      </Stack>
    </Card>
  );
}
