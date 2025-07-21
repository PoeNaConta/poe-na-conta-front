import { CategoryBalance } from '@services/balance/types';
import { Transaction } from '@services/transaction/types';

export interface BalanceLineChartProps {
  balanceDataSet: {
    date: string;
    balance: number;
    gains: number;
    debts: number;
  }[];
}

export interface ReportCardProps extends BalanceLineChartProps {
  biggestExpenses: Transaction[];
  categoriesDebts: CategoryBalance[];
}

export interface BalanceCardsProps {
  totalBalance: string;
  gainsBalance: string;
  debtsBalance: string;
}

export interface HomeViewProps extends ReportCardProps, BalanceCardsProps {}
