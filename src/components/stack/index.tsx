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
}: StackProps) {
  const base = 'lds--stack';

  const getWrapModifier = () => {
    return wrap === true ? 'wrap' : wrap;
  };

  const className = removeSpaces(
    `${base} ${base}--${getWrapModifier()} ${base}--space-${space} ${base}--direction--${direction} ${base}--align-${align} ${base}--justify-${justify}`,
  );

  return createElement(element, { className }, children);
}
