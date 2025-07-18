import { createElement, useCallback } from 'react';
import { CardProps } from './types';
import './card.css';
import removeSpaces from '@utils/remove-spaces';

export default function Card({
  form,
  children,
  padding = 'xxxl',
  radius = 'xl',
  fullWidth,
  ...props
}: CardProps) {
  const element = form ? 'form' : 'div';
  const base = 'lds--card';

  const getFullWidthModifier = useCallback(() => {
    return fullWidth ? `${base}--full-width` : '';
  }, [fullWidth]);

  const className = removeSpaces(
    `${base} ${base}--padding--${padding} ${getFullWidthModifier()} ${base}--radius--${radius}`,
  );

  return createElement(element, { className, ...props }, children);
}
