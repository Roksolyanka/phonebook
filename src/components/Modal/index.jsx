import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Dialog } from './styled';

export const Modal = ({ children, open, onClose }) => {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [dialog, open]);

  const handleBackdropClick = event => {
    if (event.target === dialog.current) {
      onClose();
    }
  };

  return createPortal(
    <Dialog ref={dialog} onClick={handleBackdropClick}>
      {open ? children : null}
    </Dialog>,
    document.getElementById('modal')
  );
};
