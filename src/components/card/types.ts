import { FormEvent, PropsWithChildren } from 'react';

export interface FormCardProps extends PropsWithChildren {
  form: boolean;
  onSubmit?: ((e: FormEvent<HTMLFormElement>) => void) | (() => void);
  onReset?: ((e: FormEvent<HTMLFormElement>) => void) | (() => void);
}

export interface DefaultCardProps extends PropsWithChildren {
  form?: never;
  onSubmit?: never;
  onReset?: never;
}

export type CardProps = FormCardProps | DefaultCardProps;
