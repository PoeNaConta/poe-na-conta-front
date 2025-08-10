import { ChangeEvent, FormEvent } from 'react';

export interface NewPasswordSearchParams {
  token: string;
}

export interface NewPasswordProps {
  password: string;
  isLoading: boolean;
  requestStatus: RequestStatus;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: ((e: FormEvent<HTMLFormElement>) => void) | (() => void);
}

export type RequestStatus = 'pending' | 'sent' | 'error';
