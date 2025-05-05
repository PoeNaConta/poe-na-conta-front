import { PropsWithChildren } from 'react';

export interface PrimaryButtonProps extends PropsWithChildren {
  primary: true;
  secondary?: never;
  onClick: () => void;
  fake?: never;
  type?: 'button';
  disabled?: boolean;
}

export interface PrimaryFormButtonProps extends PropsWithChildren {
  primary: true;
  secondary?: never;
  onClick?: never;
  fake?: never;
  type: 'submit' | 'reset';
  disabled?: boolean;
}

export interface SecondaryButtonProps extends PropsWithChildren {
  primary?: never;
  secondary: true;
  onClick: () => void;
  fake?: never;
  type?: 'button';
  disabled?: boolean;
}

export interface SecondaryFormButtonProps extends PropsWithChildren {
  primary?: never;
  secondary: true;
  onClick?: never;
  fake?: never;
  type: 'submit' | 'reset';
  disabled?: boolean;
}

export interface FakeButtonProps extends PropsWithChildren {
  primary?: boolean;
  secondary?: boolean;
  onClick?: never;
  fake: true;
  type?: never;
  disabled?: boolean;
}

export type ButtonProps =
  | FakeButtonProps
  | SecondaryFormButtonProps
  | SecondaryButtonProps
  | PrimaryFormButtonProps
  | PrimaryButtonProps;
