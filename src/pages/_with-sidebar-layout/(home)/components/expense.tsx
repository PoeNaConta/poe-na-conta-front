import Stack from '@components/stack';
import Text from '@components/text';
import { Transaction } from '@services/transaction/types';
import { formatCurrency } from '@utils/format-currency';

export default function Expense({
  transaction,
  index,
}: {
  transaction: Transaction;
  index: number;
}) {
  return (
    <Stack
      key={transaction.id}
      direction="row"
      space="xs"
      justify="between"
      fullWidth
    >
      <Stack direction="row" space="none">
        <Text secondary size="xs">
          {index + 1}.
        </Text>

        <Text secondary size="xs">
          {transaction.title}
        </Text>
      </Stack>

      <Text error size="xs">
        -{' '}
        {formatCurrency(transaction.balance).replace('-', '').replace('.', ',')}
      </Text>
    </Stack>
  );
}
