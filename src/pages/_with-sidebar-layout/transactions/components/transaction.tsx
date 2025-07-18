import Stack from '@components/stack';
import Text from '@components/text';
import { Transaction as TransactionType } from '@services/transaction/types';
import { EditIcon, TrashIcon } from 'lucide-react';

export default function Transaction({
  balance = '0',
  title,
  createdat,
  description,
}: Partial<TransactionType>) {
  const formattedBalance = `R$ ${Number(balance).toFixed(2)}`
    .replace('.', ',')
    .replace(/(.*)([-])(.*)/, '$2 $1$3');

  return (
    <Stack direction="row" fullWidth>
      <Stack direction="row" align="center" justify="between" fullWidth>
        <Stack space="none">
          <Text secondary weight="bold" size="xs">
            {createdat}
          </Text>

          <Text size="lg">{title}</Text>

          <Text secondary size="xs">
            {description}
          </Text>
        </Stack>

        <Text
          success={Number(balance) >= 0}
          error={Number(balance) < 0}
          size="sm"
          weight="bold"
        >
          {formattedBalance}
        </Text>
      </Stack>

      <Stack space="md">
        <EditIcon
          size={16}
          style={{
            cursor: 'pointer',
            color: 'var(--lds-text-color-secondary)',
          }}
          strokeWidth={2.25}
        />
        <TrashIcon
          size={16}
          style={{
            cursor: 'pointer',
            color: 'var(--lds-text-color-secondary)',
          }}
          strokeWidth={2.25}
        />
      </Stack>
    </Stack>
  );
}
