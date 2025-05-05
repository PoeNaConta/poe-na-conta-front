import { ButtonProps } from './types';
import './button.css';

export default function Button({
  children,
  primary,
  secondary,
  disabled = false,
  type = 'button',
  onClick: handleClick,
}: ButtonProps) {
  const base = 'lds--button';

  const getColorModifier = () => {
    if (primary) return `${base}--primary`;
    if (secondary) return `${base}--secondary`;
  };

  const className = `${base} ${getColorModifier()}`;
  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
