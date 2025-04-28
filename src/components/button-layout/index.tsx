import './button-layout.css';
import { ButtonLayoutProps } from './types';

export default function ButtonLayout({
  primaryButton,
  secondaryButton,
  row,
  column,
  fullWidth = true,
}: ButtonLayoutProps) {
  const base = 'lds--button-layout';

  const getDirectionModifier = () => {
    if (row) return `${base}--row`;
    if (column) return `${base}--column`;
    return '';
  };

  const getFullWidthModifier = () => {
    if (fullWidth) return `${base}--full-width`;
    return '';
  };

  const className = `${base} ${getDirectionModifier()} ${getFullWidthModifier()}`;
  return (
    <div className={className}>
      {primaryButton}
      {secondaryButton ? secondaryButton : null}
    </div>
  );
}
