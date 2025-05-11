import { FunctionComponent, PropsWithChildren } from 'react';

export interface StackProps extends PropsWithChildren {
  space?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'none';
  align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  wrap?: true | 'nowrap' | 'wrap' | 'wrap-reverse';
  as?:
    | 'div'
    | 'section'
    | 'article'
    | 'aside'
    | 'header'
    | 'footer'
    | 'nav'
    | 'main'
    | FunctionComponent<PropsWithChildren & { className: string }>;
}
