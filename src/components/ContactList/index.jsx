import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix';

import ModalDelete from 'components/ModalDelete';

import sprite from '../../assets/sprite.svg';
import {
  Button,
  ButtonWrapper,
  ContactItem,
  ContactWrapper,
  ContactsList,
  Icon,
  ListName,
  ListPhone,
} from './styled';

export const ContactList = ({
  contacts,
  onDeleteContact,
  onEditContact,
  activeContact,
  setActiveContact,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const showContacts = Array.isArray(contacts) && contacts.length > 0;

  const openModal = contact => {
    setSelectedContact(contact);
    setShowModal(true);
    setActiveContact(contact);
  };

  const closeModal = () => {
    setSelectedContact(null);
    setShowModal(false);
    setActiveContact(null);
  };

  const callContact = contact => {
    const phoneNumber = contact.number;
    window.location.href = `tel:${phoneNumber}`;
    setActiveContact(contact);

    setTimeout(() => {
      setActiveContact(null);
    }, 10000); //це тимчасово
  };

  const handleEditContact = contact => {
    onEditContact(contact);
    setActiveContact(contact);
  };

  return (
    <ContactsList>
      {showContacts &&
        contacts.map(contact => {
          const isContactActive =
            activeContact && activeContact.id === contact.id;

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
                  onClick={() => callContact(contact)}
                  disabled={isContactActive}
                >
                  <Icon>
                    <use href={`${sprite}#icon-phone`}></use>
                  </Icon>
                </Button>
                <Button
                  aria-label="Edit contact"
                  type="button"
                  onClick={() => handleEditContact(contact)}
                  disabled={isContactActive}
                >
                  <Icon>
                    <use href={`${sprite}#icon-pencil`}></use>
                  </Icon>
                </Button>
                <Button
                  aria-label="Delete contact"
                  type="button"
                  onClick={() => openModal(contact)}
                  disabled={isContactActive}
                >
                  <Icon>
                    <use href={`${sprite}#icon-delete`}></use>
                  </Icon>
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
            Notify.success(
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
  activeContact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  setActiveContact: PropTypes.func,
};
