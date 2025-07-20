import {
  ResponsiveContainer,
  CartesianGrid,
  Line,
  XAxis,
  YAxis,
  Legend,
  LineChart,
} from 'recharts';
import { BalanceLineChartProps } from '../types';

export default function BalanceLineChart({
  balanceDataSet,
}: BalanceLineChartProps) {
  return (
    <ResponsiveContainer width={'100%'} height={200}>
      <LineChart data={balanceDataSet}>
        <CartesianGrid />
        <Line
          type="monotone"
          dataKey="balance"
          stroke="var(--lds-color-brand)"
          name="Saldo"
          connectNulls
        />
        <Line
          type="monotone"
          dataKey="gains"
          stroke="var(--lds-color-success)"
          name="Entradas"
          connectNulls
        />
        <Line
          type="monotone"
          dataKey="debts"
          stroke="var(--lds-color-error)"
          name="Saídas"
          connectNulls
        />
        <XAxis dataKey="date" />
        <YAxis />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
}
