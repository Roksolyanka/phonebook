import React from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';

import {
  Button,
  ButtonWrapper,
  ContactItem,
  ContactsList,
  IconPencil,
  ListPhone,
} from './ContactListStyled.styled';
import sprite from '../../assets/sprite.svg';

export const ContactList = ({ contacts, onDeleteContact, onEditContact }) => {
  const showContacts = Array.isArray(contacts) && contacts.length > 0;

  return (
    <ContactsList>
      {showContacts &&
        contacts.map(contact => {
          return (
            <ContactItem key={contact.id}>
              <div>
                <span>{contact.name}</span>:
                <ListPhone>{contact.number}</ListPhone>
              </div>
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
                  onClick={() => {
                    onDeleteContact(contact.id);
                    Notiflix.Notify.success(
                      `Contact ${contact.name} successfully deleted.`
                    );
                  }}
                >
                  &times;
                </Button>
              </ButtonWrapper>
            </ContactItem>
          );
        })}
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
