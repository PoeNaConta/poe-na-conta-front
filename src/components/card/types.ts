import { FormEvent, PropsWithChildren } from 'react';

export interface FormCardProps extends PropsWithChildren {
  form: true;
  onSubmit?: ((e: FormEvent<HTMLFormElement>) => void) | (() => void);
  onReset?: ((e: FormEvent<HTMLFormElement>) => void) | (() => void);
  onClick?: never;
  style?: React.CSSProperties;
  radius?: 'none' | 'md' | 'xl';
  padding?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'none';
  fullWidth?: boolean;
}

export interface DefaultCardProps extends PropsWithChildren {
  form?: never;
  onSubmit?: never;
  onReset?: never;
  onClick?: () => void;
  style?: React.CSSProperties;
  radius?: 'none' | 'md' | 'xxl';
  padding?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'none';
  fullWidth?: boolean;
}

export type CardProps = FormCardProps | DefaultCardProps;
