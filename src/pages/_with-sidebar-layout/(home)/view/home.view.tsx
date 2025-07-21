import CenterLayout from '@components/center-layout';
import BalanceCards from '../components/balance-cards';
import Text from '@components/text';
import ReportCard from '../components/report-card';
import Stack from '@components/stack';
import { HomeViewProps } from '../types';

export default function Home({
  totalBalance,
  gainsBalance,
  debtsBalance,
  categoriesDebts,
  balanceDataSet,
  biggestExpenses,
}: HomeViewProps) {
  return (
    <CenterLayout width={90}>
      <Stack align="stretch" space="xl" fullHeight fullWidth>
        <BalanceCards
          totalBalance={totalBalance}
          gainsBalance={gainsBalance}
          debtsBalance={debtsBalance}
        />

        <Text secondary as="h3" weight="bold" size="lg" center>
          Relatório por período
        </Text>

        <ReportCard
          categoriesDebts={categoriesDebts}
          balanceDataSet={balanceDataSet}
          biggestExpenses={biggestExpenses}
        />
      </Stack>
    </CenterLayout>
  );
}
