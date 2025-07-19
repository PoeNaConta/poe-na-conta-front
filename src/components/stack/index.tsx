import removeSpaces from '@utils/remove-spaces';
import { StackProps } from './types';
import './stack.css';
import { createElement } from 'react';

export default function Stack({
  space = 'lg',
  align = 'start',
  justify = 'start',
  direction = 'column',
  wrap = 'nowrap',
  as: element = 'div',
  children,
  fullWidth,
  fullHeight,
  style,
  className: newClasses,
  ...rest
}: StackProps) {
  const base = 'lds--stack';

  const getWrapModifier = () => {
    return wrap === true ? `${base}--wrap` : `${base}--${wrap}`;
  };

  const getFullWidthModifier = () => {
    return fullWidth ? `${base}--full-width` : '';
  };

  const getFullHeightModifier = () => {
    return fullHeight ? `${base}--full-height` : '';
  };

  const getPaddingStyle = () => {
    const paddingProps = rest as Record<string, string>;
    const paddingsStyle: Record<string, string> = {};
    for (const padding in paddingProps) {
      if (padding)
        paddingsStyle[padding] = `var(--lds-spacing-${paddingProps[padding]})`;
    }
    return paddingsStyle;
  };

  const className = removeSpaces(
    `${base} ${getWrapModifier()} ${getFullHeightModifier()} ${getFullWidthModifier()} ${base}--space-${space} ${base}--direction--${direction} ${base}--align-${align} ${base}--justify-${justify} ${newClasses ?? ''}`,
  );

  return createElement(
    element,
    {
      className,
      style: { ...getPaddingStyle(), ...(style as Record<string, string>) },
    },
    children,
  );
}
