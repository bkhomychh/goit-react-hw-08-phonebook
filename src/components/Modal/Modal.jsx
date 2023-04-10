import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Backdrop, ModalWindow } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

export default function Modal({ closeModal, children }) {
  useEffect(() => {
    const handleClick = ({ target }) => {
      const shouldCloseModal = target.classList.contains(
        Backdrop.styledComponentId
      );
      shouldCloseModal && closeModal();
    };
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('click', handleClick);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  return createPortal(
    <Backdrop>
      <ModalWindow>{children}</ModalWindow>
    </Backdrop>,
    modalRoot
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
