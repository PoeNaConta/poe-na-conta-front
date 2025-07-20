import Stack from '@components/stack';
import BalanceCard from './balance-card';
import {
  BadgeDollarSignIcon,
  ChevronDownCircleIcon,
  ChevronUpCircleIcon,
} from 'lucide-react';
import { BalanceCardsProps } from '../types';

export default function BalanceCards({
  totalBalance,
  gainsBalance,
  debtsBalance,
}: BalanceCardsProps) {
  return (
    <Stack direction="row" space="md" wrap="mobile" justify="center">
      <BalanceCard
        title="Saldo"
        value={totalBalance}
        icon={BadgeDollarSignIcon}
        color="var(--lds-text-color-warning)"
      />

      <BalanceCard
        title="Entradas"
        value={gainsBalance}
        icon={ChevronDownCircleIcon}
        color="var(--lds-text-color-success)"
      />

      <BalanceCard
        title="Saídas"
        value={debtsBalance}
        icon={ChevronUpCircleIcon}
        color="var(--lds-text-color-error)"
      />
    </Stack>
  );
}
