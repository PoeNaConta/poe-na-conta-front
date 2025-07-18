import { createElement, useCallback } from 'react';
import { IconButtonProps } from './types';
import removeSpaces from '@utils/remove-spaces';
import './icon-button.css';

export default function IconButton({
  icon,
  primary,
  active,
  className = '',
  children,
  link,
  ...rest
}: IconButtonProps) {
  const classNameBase = 'lds--icon-button';

  const getPrimaryModifier = useCallback(() => {
    if (primary) return `${classNameBase}--primary`;
    return '';
  }, [primary]);

  const getActiveModifier = useCallback(() => {
    if (active) return `${classNameBase}--active`;
    return '';
  }, [active]);

  return createElement(
    link ? 'a' : 'button',
    {
      className: removeSpaces(
        `${classNameBase} ${getPrimaryModifier()} ${getActiveModifier()} ${className}`,
      ),
      draggable: false,
      ...rest,
    },
    icon,
    <span className={`${classNameBase}--title`}>{children}</span>,
  );
}
