import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import {
  Button,
  ButtonWrapper,
  ContactItem,
  ContactWrapper,
  ContactsList,
  Icon,
  ListName,
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

  const callContact = contact => {
    const phoneNumber = contact.number;
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <ContactsList>
      {showContacts &&
        contacts.map(contact => {
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
                >
                  <Icon>
                    <use href={`${sprite}#icon-phone`}></use>
                  </Icon>
                </Button>
                <Button
                  aria-label="Edit contact"
                  type="button"
                  onClick={() => onEditContact(contact)}
                >
                  <Icon>
                    <use href={`${sprite}#icon-pencil`}></use>
                  </Icon>
                </Button>
                <Button
                  aria-label="Delete contact"
                  type="button"
                  onClick={() => openModal(contact)}
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
