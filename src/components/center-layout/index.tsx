import './center-layout.css';
import Stack from '@components/stack';
import Text from '@components/text';
import { CenterLayoutProps } from './types';

export default function CenterLayout({
  title,
  subtitle,
  width,
  height,
  children,
}: CenterLayoutProps) {
  const baseClassName = 'lds--center-layout';

  return (
    <div className={baseClassName}>
      <Stack space="xxl" fullWidth align="center" justify="center">
        {Boolean(title) && (
          <Stack fullWidth align="center" space="none">
            <Text primary as="h1" weight="bold" size="lg">
              {title}
            </Text>
            {Boolean(subtitle) && (
              <Text secondary as="h2" weight="bold" size="sm">
                {subtitle}
              </Text>
            )}
          </Stack>
        )}
        <div
          className={`${baseClassName}--content`}
          style={{
            width: width ? `${width}%` : 'auto',
            height: height ? `${height}%` : 'auto',
          }}
        >
          {children}
        </div>
      </Stack>
    </div>
  );
}
