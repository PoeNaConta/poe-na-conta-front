import { PropsWithChildren } from 'react';

export interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}
