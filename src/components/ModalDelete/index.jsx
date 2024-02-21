import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import {
  ModalDeleteBackdrop,
  ModalDeleteBox,
  ModalDeleteButtonWrapper,
  ModalDeleteTitle,
} from './styled';
import { ButtonUi } from 'ui/ButtonUi.styled';

const ModalDelete = ({ contact, onDeleteContact, onNoDeleteContact }) => {
  const dialogRef = useRef(null);

  const onConfirm = () => {
    onDeleteContact(contact.id);
    dialogRef.current.close();
  };

  const onCancel = () => {
    onNoDeleteContact();
    dialogRef.current.close();
  };

  return (
    <ModalDeleteBackdrop onClick={onCancel}>
      <ModalDeleteBox ref={dialogRef}>
        <ModalDeleteTitle>
          Are you sure you want to delete <br />
          the contact <br />
          {contact.name}?
        </ModalDeleteTitle>
        <ModalDeleteButtonWrapper>
          <ButtonUi margin={'0'} type="button" onClick={onConfirm}>
            Yes
          </ButtonUi>
          <ButtonUi margin={'0'} type="button" onClick={onCancel}>
            No
          </ButtonUi>
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
