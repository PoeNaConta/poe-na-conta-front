import { ChangeEvent, HTMLInputTypeAttribute } from 'react';

export interface InputProps {
  label?: string;
  id?: string;
  name?: string;
  type?: HTMLInputTypeAttribute;
  value?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
