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

        <Text>R$ {Number(balance).toFixed(2).replace('.', ',')}</Text>
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
