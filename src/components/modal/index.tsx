import { ModalProps } from './types';
import './modal.css';

export default function Modal({
  children,
  isOpen,
  onClose: handleClose,
}: ModalProps) {
  const baseClassname = 'lds--modal';

  if (!isOpen) return null;

  return (
    <div className={`${baseClassname}__wrapper`}>
      <div className={`${baseClassname}__backdrop`} onClick={handleClose} />
      <div className={`${baseClassname}__content`}>{children}</div>
    </div>
  );
}
