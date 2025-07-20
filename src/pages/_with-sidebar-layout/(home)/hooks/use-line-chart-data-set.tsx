import { Transaction } from '@services/transaction/types';
import { useMemo } from 'react';

export default function useLineChartDataSet({
  gains,
  debts,
}: {
  gains: Transaction[];
  debts: Transaction[];
}) {
  const gainsSet = useMemo(() => {
    const grouped = gains.reduce<
      Record<string, { balance: number; date: string; createdat: string }>
    >((acc, gain) => {
      const date = new Date(gain.createdat ?? 0).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
      });

      if (!acc[date]) {
        acc[date] = { balance: 0, date, createdat: gain.createdat ?? '' };
      }
      acc[date].balance += Number(gain.balance ?? 0);
      return acc;
    }, {});

    return Object.values(grouped).sort(
      (a, b) =>
        new Date(b.createdat).getTime() - new Date(a.createdat).getTime(),
    );
  }, [gains]);

  const debtsSet = useMemo(() => {
    const grouped = debts.reduce<
      Record<string, { balance: number; date: string; createdat: string }>
    >((acc, debt) => {
      const date = new Date(debt.createdat ?? 0).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
      });

      if (!acc[date]) {
        acc[date] = { balance: 0, date, createdat: debt.createdat ?? '' };
      }
      acc[date].balance += -Number(debt.balance ?? 0);
      return acc;
    }, {});

    return Object.values(grouped).sort(
      (a, b) =>
        new Date(b.createdat).getTime() - new Date(a.createdat).getTime(),
    );
  }, [debts]);

  const balanceDataSet = useMemo(() => {
    const gainsMap = gainsSet.reduce<Record<string, number>>((acc, item) => {
      acc[item.date] = item.balance;
      return acc;
    }, {});

    const debtsMap = debtsSet.reduce<Record<string, number>>((acc, item) => {
      acc[item.date] = item.balance;
      return acc;
    }, {});

    const allDates = Array.from(
      new Set([...Object.keys(gainsMap), ...Object.keys(debtsMap)]),
    ).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

    let previousBalance = 0;

    return allDates.map((date) => {
      const gains = gainsMap[date];
      const debts = debtsMap[date];
      const balance = previousBalance + (gains ?? 0) - (debts ?? 0);
      previousBalance = balance;
      return {
        date,
        balance,
        gains,
        debts,
      };
    });
  }, [gainsSet, debtsSet]);

  return { balanceDataSet, gainsSet, debtsSet };
}
