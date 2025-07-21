import Card from '@components/card';
import Stack from '@components/stack';
import ReportLayout from './report-layout';
import Expense from './expense';
import { ReportCardProps } from '../types';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import BalanceLineChart from './balance-line-chart';
import PieChartActiveShape from '@components/pie-chart-active-shape';

const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#FF6384',
  '#36A2EB',
  '#FFCE56',
  '#4BC0C0',
  '#9966FF',
  '#FF9F40',
];

export default function ReportCard({
  categoriesDebts,
  balanceDataSet,
  biggestExpenses,
}: ReportCardProps) {
  return (
    <Card>
      <Stack direction="row" justify="between" wrap="mobile" space="xl">
        <ReportLayout title="Gráfico de saldos, entradas e saídas">
          <BalanceLineChart balanceDataSet={balanceDataSet} />
        </ReportLayout>

        <ReportLayout title="Maiores gastos">
          {biggestExpenses.map((transaction, index) => (
            <Expense
              key={transaction.id}
              transaction={transaction}
              index={index}
            />
          ))}
        </ReportLayout>

        <ReportLayout title="Gastos por categoria">
          <ResponsiveContainer width={'100%'} height={250}>
            <PieChart>
              <Pie
                data={categoriesDebts}
                activeShape={PieChartActiveShape}
                dataKey="balance"
                nameKey="category"
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={65}
              >
                {categoriesDebts.map((entry, index) => (
                  <Cell
                    key={`cell-${entry.category}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </ReportLayout>
      </Stack>
    </Card>
  );
}
