import { ButtonProps } from './types';
import './button.css';

export default function Button({
  children,
  primary,
  secondary,
  onClick: handleClick,
}: ButtonProps) {
  const base = 'lds--button';

  const getColorModifier = () => {
    if (primary) return `${base}--primary`;
    if (secondary) return `${base}--secondary`;
  };

  const className = `${base} ${getColorModifier()}`;
  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
}
