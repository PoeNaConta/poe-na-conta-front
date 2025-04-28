import { ReactNode } from 'react';

export interface ButtonLayoutProps {
  primaryButton: ReactNode;
  secondaryButton?: ReactNode;
  row?: boolean;
  column?: boolean;
  fullWidth?: boolean;
}
