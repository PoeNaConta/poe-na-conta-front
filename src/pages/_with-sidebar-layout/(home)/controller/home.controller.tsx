import { Transaction } from '@services/transaction/types';
import { Route } from '..';
import Home from '../view/home.view';
import useLineChartDataSet from '../hooks/use-line-chart-data-set';

export default function HomeController() {
  const {
    totalBalance,
    gainsBalance,
    debtsBalance,
    debts,
    gains,
    balanceCategories: categoriesBalance,
  } = Route.useLoaderData();

  const { balanceDataSet } = useLineChartDataSet({ gains, debts });

  return (
    <Home
      totalBalance={totalBalance}
      gainsBalance={gainsBalance}
      debtsBalance={debtsBalance}
      categoriesBalance={categoriesBalance}
      balanceDataSet={balanceDataSet}
      biggestExpenses={debts.sort(
        (a: Transaction, b: Transaction) =>
          Number(a.balance) - Number(b.balance),
      )}
    />
  );
}
