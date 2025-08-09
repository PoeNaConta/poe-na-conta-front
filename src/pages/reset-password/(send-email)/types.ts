import { ChangeEvent, FormEvent } from 'react';

export type RequestStatus = 'pending' | 'sent' | 'error';

export interface SendEmailProps {
  email: string;
  isLoading: boolean;
  requestStatus: RequestStatus;
  onSubmit: ((e: FormEvent<HTMLFormElement>) => void) | (() => void);
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface EmailFormProps {
  email: string;
  isLoading: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
