import { Spacing } from '@utils/global-styles';
import {
  FunctionComponent,
  PropsWithChildren,
  StyleHTMLAttributes,
} from 'react';

export interface StackProps extends PropsWithChildren {
  space?: Spacing;
  padding?: Spacing;
  paddingInline?: Spacing;
  paddingLeft?: Spacing;
  paddingRight?: Spacing;
  paddingBlock?: Spacing;
  paddingTop?: Spacing;
  paddingBottom?: Spacing;
  align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  wrap?: true | 'nowrap' | 'wrap' | 'mobile' | 'wrap-reverse';
  fullWidth?: boolean;
  fullHeight?: boolean;
  style?: StyleHTMLAttributes<HTMLElement>;
  className?: string;
  as?: StackAsProp;
}

export type StackAsProp =
  | 'div'
  | 'section'
  | 'article'
  | 'aside'
  | 'header'
  | 'footer'
  | 'nav'
  | 'main'
  | CustomStackAsProp;

export type CustomStackAsProp = FunctionComponent<
  PropsWithChildren & { className: string; style?: Record<string, string> }
>;
