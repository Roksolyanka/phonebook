import React from 'react';
import PropTypes from 'prop-types';

import {
  ModalDeleteBackdrop,
  ModalDeleteBox,
  ModalDeleteButton,
  ModalDeleteButtonWrapper,
  ModalDeleteTitle,
} from './styled';

const ModalDelete = ({ contact, onDeleteContact, onNoDeleteContact }) => {
  const onConfirm = () => {
    onDeleteContact(contact.id);
  };

  const onCancel = () => {
    onNoDeleteContact();
  };

  const onBackdropClick = event => {
    if (event.target.classList.contains('ModalDeleteBackdrop')) {
      onCancel();
    }
  };

  return (
    <ModalDeleteBackdrop
      className="ModalDeleteBackdrop"
      onClick={onBackdropClick}
    >
      <ModalDeleteBox>
        <ModalDeleteTitle>
          Are you sure you want to delete <br />
          the contact <br />
          {contact.name}?
        </ModalDeleteTitle>
        <ModalDeleteButtonWrapper>
          <ModalDeleteButton type="button" onClick={onConfirm}>
            Yes
          </ModalDeleteButton>
          <ModalDeleteButton type="button" onClick={onCancel}>
            No
          </ModalDeleteButton>
        </ModalDeleteButtonWrapper>
      </ModalDeleteBox>
    </ModalDeleteBackdrop>
  );
};

ModalDelete.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func.isRequired,
  onNoDeleteContact: PropTypes.func.isRequired,
};

export default ModalDelete;
