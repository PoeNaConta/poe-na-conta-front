import { PropsWithChildren } from 'react';

export interface TextProps extends PropsWithChildren {
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h5' | 'span' | 'label';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
  htmlFor?: string;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  onBrand?: boolean;
  center?: boolean;
  justify?: boolean;
}
