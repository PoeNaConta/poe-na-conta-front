import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

export interface IconHTMLButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  active?: boolean;
  link?: never;
  icon: ReactNode;
}

export interface IconHTMLAnchorProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  primary?: boolean;
  active?: boolean;
  link: true;
  icon: ReactNode;
}

export type IconButtonProps = IconHTMLButtonProps | IconHTMLAnchorProps;
