import React from 'react';
import PropTypes from 'prop-types';

import {
  ButtonDelete,
  ContactItem,
  ContactsList,
  ListPhone,
} from './ContactListStyled.styled';
import Notiflix from 'notiflix';

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
