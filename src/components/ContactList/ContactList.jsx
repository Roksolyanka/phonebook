import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import {
  Button,
  ButtonWrapper,
  ContactItem,
  ContactWrapper,
  ContactsList,
  IconPencil,
  ListPhone,
} from './ContactListStyled.styled';
import sprite from '../../assets/sprite.svg';
import ModalDelete from 'components/ModalDelete/ModalDelete';

export const ContactList = ({ contacts, onDeleteContact, onEditContact }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const showContacts = Array.isArray(contacts) && contacts.length > 0;

  const openModal = contact => {
    setSelectedContact(contact);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedContact(null);
    setShowModal(false);
  };

  return (
    <ContactsList>
      {showContacts &&
        contacts.map(contact => {
          return (
            <ContactItem key={contact.id}>
              <ContactWrapper>
                <span>{contact.name}:</span>
                <ListPhone>{contact.number}</ListPhone>
              </ContactWrapper>
              <ButtonWrapper>
                <Button
                  aria-label="Edit contact"
                  type="button"
                  onClick={() => onEditContact(contact)}
                >
                  <IconPencil>
                    <use href={`${sprite}#icon-pencil`}></use>
                  </IconPencil>
                </Button>
                <Button
                  aria-label="Delete contact"
                  type="button"
                  onClick={() => openModal(contact)}
                >
                  &times;
                </Button>
              </ButtonWrapper>
            </ContactItem>
          );
        })}
      {showModal && (
        <ModalDelete
          contact={selectedContact}
          onDeleteContact={contactId => {
            onDeleteContact(contactId);
            Notiflix.Notify.success(
              `Contact ${selectedContact.name} successfully deleted.`
            );
            closeModal();
          }}
          onNoDeleteContact={closeModal}
        />
      )}
    </ContactsList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
  onEditContact: PropTypes.func.isRequired,
};
