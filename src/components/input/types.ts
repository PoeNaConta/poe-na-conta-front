import { ChangeEvent, HTMLInputTypeAttribute } from 'react';

export interface InputBaseProps {
  name?: string;
  type?: HTMLInputTypeAttribute;
  value?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface InputProps extends InputBaseProps {
  label?: string;
}
