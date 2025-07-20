import Stack from '@components/stack';
import Text from '@components/text';
import { PropsWithChildren } from 'react';

export default function ReportLayout({
  title,
  children,
}: {
  title: string;
} & PropsWithChildren) {
  return (
    <Stack align="center" fullWidth fullHeight>
      <Text secondary as="h4" weight="bold" size="xs">
        {title}
      </Text>

      {children}
    </Stack>
  );
}
