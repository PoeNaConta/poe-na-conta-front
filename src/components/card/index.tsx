import { createElement } from 'react';
import { CardProps } from './types';
import './card.css';

export default function Card({ form, children, onSubmit, onReset }: CardProps) {
  const element = form ? 'form' : 'div';
  const base = 'lds--card';
  const className = `${base}`;

  return createElement(element, { className, onSubmit, onReset }, children);
}
