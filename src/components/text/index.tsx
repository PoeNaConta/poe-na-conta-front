import { createElement, PropsWithChildren } from 'react';
import './text.css';

export interface TextProps extends PropsWithChildren {
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h5' | 'span';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  onBrand?: boolean;
}

export default function Text({
  children,
  as: element = 'p',
  size = 'md',
  primary = false,
  secondary = false,
  tertiary = false,
  onBrand = false,
}: TextProps) {
  const prefix = 'lds--text';

  const getColorModifier = () => {
    if (primary) return `${prefix}--primary`;
    if (secondary) return `${prefix}--secondary`;
    if (tertiary) return `${prefix}--tertiary`;
    if (onBrand) return `${prefix}--onbrand`;
    return `${prefix}--default`;
  };

  const className = `${prefix} ${getColorModifier()} ${prefix}--${size}`;

  return createElement(element, { className }, children);
}
