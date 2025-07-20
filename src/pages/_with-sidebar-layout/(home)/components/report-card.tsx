import Card from '@components/card';
import Stack from '@components/stack';
import ReportLayout from './report-layout';
import Expense from './expense';
import { ReportCardProps } from '../types';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import BalanceLineChart from './balance-line-chart';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function ReportCard({
  categoriesBalance,
  balanceDataSet,
  biggestExpenses,
}: ReportCardProps) {
  return (
    <Card>
      <Stack direction="row" justify="between" wrap="mobile">
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
          <ResponsiveContainer width={'100%'} height={200}>
            <PieChart>
              <Pie data={categoriesBalance}>
                {categoriesBalance.map((entry, index) => (
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
