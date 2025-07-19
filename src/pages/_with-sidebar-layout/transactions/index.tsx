import { createFileRoute } from '@tanstack/react-router';
import TransactionsController from './controller/transactions.controller';
import { fetchDebtsAndGains } from './utils/fetch-debts-and-gains';
import LoadingPage from '@components/loading-page';

export const Route = createFileRoute('/_with-sidebar-layout/transactions/')({
  loader: fetchDebtsAndGains,
  pendingComponent: LoadingPage,
  pendingMs: 50,
  component: TransactionsController,
});
