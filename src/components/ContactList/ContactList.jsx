import React from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';

import {
  ButtonDelete,
  ButtonWrapper,
  ContactItem,
  ContactsList,
  IconPencil,
  ListPhone,
} from './ContactListStyled.styled';
import sprite from '../../assets/sprite.svg';

export const ContactList = ({ contacts, onDeleteContact }) => {
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
                <ButtonDelete
                  aria-label="Edit contact"
                  type="button"
                  onClick={() => {
                    // onDeleteContact(contact.id);
                    // Notiflix.Notify.success(
                    //   `Contact ${contact.name} successfully deleted.`
                    // );
                  }}
                >
                  <IconPencil>
                    <use href={`${sprite}#icon-pencil`}></use>
                  </IconPencil>
                </ButtonDelete>
                <ButtonDelete
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
                </ButtonDelete>
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
};
