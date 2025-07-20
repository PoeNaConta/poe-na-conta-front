import { createFileRoute } from '@tanstack/react-router';
import HomeController from './controller/home.controller';
import { fetchBalanceInformation } from './utils/fetch-balance-information';
import LoadingPage from '@components/loading-page';

export const Route = createFileRoute('/_with-sidebar-layout/(home)/')({
  loader: fetchBalanceInformation,
  pendingComponent: LoadingPage,
  component: HomeController,
});

export default HomeController;
