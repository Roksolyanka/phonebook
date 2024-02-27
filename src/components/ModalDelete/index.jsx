import React from 'react';
import PropTypes from 'prop-types';

import { ModalDeleteButtonWrapper, ModalDeleteTitle } from './styled';
import { ButtonUi } from 'ui/ButtonUi.styled';
import { Modal } from 'components/Modal';

const ModalDelete = ({ open, contact, onDeleteContact, onNoDeleteContact }) => {
  return (
    <Modal open={open} onClose={onNoDeleteContact}>
      <ModalDeleteTitle>
        Are you sure you want to delete <br />
        the contact <br />
        {contact && contact.name}?
      </ModalDeleteTitle>
      <ModalDeleteButtonWrapper>
        <ButtonUi margin={'0'} type="button" onClick={onDeleteContact}>
          Yes
        </ButtonUi>
        <ButtonUi margin={'0'} type="button" onClick={onNoDeleteContact}>
          No
        </ButtonUi>
      </ModalDeleteButtonWrapper>
    </Modal>
  );
};

ModalDelete.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  open: PropTypes.bool,
  onDeleteContact: PropTypes.func.isRequired,
  onNoDeleteContact: PropTypes.func.isRequired,
};

export default ModalDelete;
