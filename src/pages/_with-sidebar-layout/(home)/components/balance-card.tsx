import Card from '@components/card';
import Stack from '@components/stack';
import Text from '@components/text';
import { formatCurrency } from '@utils/format-currency';
import { LucideType } from 'lucide-react';
export default function BalanceCard({
  color,
  icon: Icon,
  title,
  value,
}: {
  color: string;
  icon: typeof LucideType;
  value: string;
  title: string;
}) {
  return (
    <Card padding="xxl" fullWidth>
      <Stack direction="row" justify="center" space="xl" fullHeight>
        <Icon
          size={26}
          style={{
            color: color,
            backgroundColor: `color-mix(in srgb, ${color}, transparent 85%)`,
            padding: 'var(--lds-spacing-md)',
            borderRadius: '100%',
          }}
        />
        <Stack space="xs" justify="center" align="start" fullHeight>
          <Text secondary size="md">
            {title}
          </Text>
          <Text size="xl">{formatCurrency(value)}</Text>
        </Stack>
      </Stack>
    </Card>
  );
}
