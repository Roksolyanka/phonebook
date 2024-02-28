import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'components/Icon';

import {
  Button,
  ButtonWrapper,
  ContactItem,
  ContactWrapper,
  ListName,
  ListPhone,
} from './styled';

export const ContactItemComponent = ({
  contact,
  activeContact,
  handleCallContact,
  handleEditContact,
  handleOpenModal,
}) => {
  const isContactActive = activeContact && activeContact.id === contact.id;

  return (
    <ContactItem key={contact.id}>
      <ContactWrapper>
        <ListName>{contact.name}:</ListName>
        <ListPhone>{contact.number}</ListPhone>
      </ContactWrapper>
      <ButtonWrapper>
        <Button
          aria-label="Call the contact"
          type="button"
          onClick={() => handleCallContact(contact)}
          disabled={isContactActive}
        >
          <Icon name="icon-phone" width="15px" height="15px" />
        </Button>
        <Button
          aria-label="Edit contact"
          type="button"
          onClick={() => handleEditContact(contact)}
          disabled={isContactActive}
        >
          <Icon name="icon-pencil" width="15px" height="15px" />
        </Button>
        <Button
          aria-label="Delete contact"
          type="button"
          onClick={() => handleOpenModal(contact)}
          disabled={isContactActive}
        >
          <Icon name="icon-delete" width="15px" height="15px" />
        </Button>
      </ButtonWrapper>
    </ContactItem>
  );
};

ContactItemComponent.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  activeContact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  handleCallContact: PropTypes.func.isRequired,
  handleEditContact: PropTypes.func.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
};
