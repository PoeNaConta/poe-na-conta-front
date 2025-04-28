import { PropsWithChildren } from 'react';

export interface PrimaryButtonProps extends PropsWithChildren {
  primary: true;
  secondary?: never;
  onClick: () => void;
  fake?: never;
}

export interface SecondaryButtonProps extends PropsWithChildren {
  primary?: never;
  secondary: true;
  onClick: () => void;
  fake?: never;
}

export interface FakeButtonProps extends PropsWithChildren {
  primary?: boolean;
  secondary?: boolean;
  onClick?: undefined;
  fake: true;
}

export type ButtonProps =
  | FakeButtonProps
  | SecondaryButtonProps
  | PrimaryButtonProps;
