import Text from '@components/text';
import './select.css';
import { SelectBaseProps, SelectProps } from './types';

function SelectBase({
  placeholder,
  options,
  onOptionSelected,
}: SelectBaseProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = event.target.selectedIndex;
    const option = options[selectedIndex - (placeholder ? 1 : 0)];
    if (option) {
      onOptionSelected(option, selectedIndex);
    }
  };

  return (
    <select required defaultValue="" onChange={handleChange}>
      {placeholder && (
        <option value="" disabled hidden>
          {placeholder}
        </option>
      )}

      {options.map((option) => (
        <option
          //onClick={() => onOptionSelected(option, optionIndex)}
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
    <div className={base}>
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
