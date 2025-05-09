import { InputBaseProps, InputProps } from './types';
import './input.css';
import Text from '@components/text';

const base = 'lds--input';

function InputBase(props: InputBaseProps) {
  return <input className={`${base}__input`} {...props} />;
}

export default function Input({ label, ...inputBaseProps }: InputProps) {
  return (
    <div className={`${base}__wrapper`}>
      {label ? (
        <Text as="label">
          {label}
          <InputBase {...inputBaseProps} />
        </Text>
      ) : (
        <InputBase {...inputBaseProps} />
      )}
    </div>
  );
}
