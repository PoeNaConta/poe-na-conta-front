import { InputProps } from './types';
import './input.css';
import Text from '@components/text';

export default function Input({ id, label, ...inputProps }: InputProps) {
  const base = 'lds--input';

  return (
    <div className={`${base}__wrapper`}>
      <Text as="label" htmlFor={id}>
        {label}
      </Text>
      <input className={`${base}__input`} id={id} {...inputProps} />
    </div>
  );
}
