import { Transaction } from '@services/transaction/types';
import { Route } from '..';
import Home from '../view/home.view';
import useLineChartDataSet from '../hooks/use-line-chart-data-set';
import { CategoryBalance } from '@services/balance/types';

export default function HomeController() {
  const {
    totalBalance,
    gainsBalance,
    debtsBalance,
    debts,
    gains,
    categoriesDebts,
  } = Route.useLoaderData();

  const { balanceDataSet } = useLineChartDataSet({ gains, debts });

  return (
    <Home
      totalBalance={totalBalance}
      gainsBalance={gainsBalance}
      debtsBalance={debtsBalance}
      categoriesDebts={categoriesDebts.map((category: CategoryBalance) => ({
        ...category,
        balance: Math.abs(Number(category.debts)),
      }))}
      balanceDataSet={balanceDataSet}
      biggestExpenses={debts.sort(
        (a: Transaction, b: Transaction) =>
          Number(a.balance) - Number(b.balance),
      )}
    />
  );
}
