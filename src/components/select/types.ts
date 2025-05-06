export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectBaseProps {
  options: SelectOption[];
  placeholder?: string;
  onOptionSelected: (option: SelectOption, optionIndex: number) => void;
}

export interface SelectProps extends SelectBaseProps {
  label?: string;
}
