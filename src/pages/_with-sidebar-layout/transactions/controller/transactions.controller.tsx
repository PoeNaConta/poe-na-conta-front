import { Route } from '..';
import Transactions from '../view/transactions.view';

export default function TransactionsController() {
  const { debts, gains } = Route.useLoaderData();

  return <Transactions debts={debts} gains={gains} />;
}
