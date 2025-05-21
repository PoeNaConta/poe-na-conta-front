import { ButtonProps } from './types';
import './button.css';

export default function Button({
  children,
  primary,
  secondary,
  link,
  disabled = false,
  type = 'button',
  onClick: handleClick,
  href,
  target,
}: ButtonProps) {
  const base = 'lds--button';

  const getColorModifier = () => {
    if (primary) return `${base}--primary`;
    if (secondary) return `${base}--secondary`;
    if (link) return `${base}--link`;
  };

  const className = `${base} ${getColorModifier()}`;

  if (link) {
    return (
      <a
        className={className}
        onClick={handleClick}
        href={href}
        target={target}
      >
        {children}
      </a>
    );
  }

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
