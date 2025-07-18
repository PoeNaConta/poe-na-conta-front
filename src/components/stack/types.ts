import { FunctionComponent, PropsWithChildren } from 'react';

export interface StackProps extends PropsWithChildren {
  space?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'none';
  padding?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'none';
  paddingInline?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'none';
  paddingLeft?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'none';
  paddingRight?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'none';
  paddingBlock?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'none';
  paddingTop?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'none';
  paddingBottom?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'none';
  align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  wrap?: true | 'nowrap' | 'wrap' | 'mobile' | 'wrap-reverse';
  fullWidth?: boolean;
  fullHeight?: boolean;
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
