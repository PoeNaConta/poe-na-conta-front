import { createElement } from 'react';
import './text.css';
import { TextProps } from './types';
import removeSpaces from '@utils/remove-spaces';

export default function Text({
  children,
  as: element = 'p',
  size = 'md',
  weight = 'regular',
  center,
  htmlFor,
  primary,
  secondary,
  tertiary,
  onBrand,
  justify,
}: TextProps) {
  const base = 'lds--text';

  const getColorModifier = () => {
    if (primary) return `${base}--primary`;
    if (secondary) return `${base}--secondary`;
    if (tertiary) return `${base}--tertiary`;
    if (onBrand) return `${base}--onbrand`;
    return `${base}--default`;
  };

  const getCenterModifier = () => {
    if (center) return `${base}--center`;
    return '';
  };

  const getJustifyModifier = () => {
    if (justify) return `${base}--justify`;
    return '';
  };

  const className = removeSpaces(
    `${base} ${base}--${weight} ${base}--${size} ${getColorModifier()} ${getCenterModifier()} ${getJustifyModifier()}`,
  );

  return createElement(element, { className, htmlFor }, children);
}
