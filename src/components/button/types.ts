import { PropsWithChildren } from 'react';

export interface PrimaryButtonProps extends PropsWithChildren {
  primary: true;
  secondary?: never;
  onClick: () => void;
  fake?: never;
  type?: 'button';
}

export interface PrimaryFormButtonProps extends PropsWithChildren {
  primary: true;
  secondary?: never;
  onClick?: never;
  fake?: never;
  type: 'submit' | 'reset';
}

export interface SecondaryButtonProps extends PropsWithChildren {
  primary?: never;
  secondary: true;
  onClick: () => void;
  fake?: never;
  type?: 'button';
}

export interface SecondaryFormButtonProps extends PropsWithChildren {
  primary?: never;
  secondary: true;
  onClick?: never;
  fake?: never;
  type: 'submit' | 'reset';
}

export interface FakeButtonProps extends PropsWithChildren {
  primary?: boolean;
  secondary?: boolean;
  onClick?: never;
  fake: true;
  type?: never;
}

export type ButtonProps =
  | FakeButtonProps
  | SecondaryFormButtonProps
  | SecondaryButtonProps
  | PrimaryFormButtonProps
  | PrimaryButtonProps;
