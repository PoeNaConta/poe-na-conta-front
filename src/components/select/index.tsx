import Text from '@components/text';
import './select.css';
import { SelectBaseProps, SelectProps } from './types';

function SelectBase({
  placeholder,
  options,
  onOptionSelected,
}: SelectBaseProps) {
  return (
    <select required defaultValue="">
      {placeholder && (
        <option value="" disabled hidden>
          {placeholder}
        </option>
      )}

      {options.map((option, optionIndex) => (
        <option
          onClick={() => onOptionSelected(option, optionIndex)}
          value={option.value}
          key={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default function Select({ label, ...selectBaseProps }: SelectProps) {
  const base = 'lds--select';

  return (
    <div className={`${base}`}>
      {label ? (
        <Text as="label">
          {label}
          <SelectBase {...selectBaseProps} />
        </Text>
      ) : (
        <SelectBase {...selectBaseProps} />
      )}
    </div>
  );
}
