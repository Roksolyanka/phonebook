import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem.styled';
import { ListPhone } from './ListPhone.styled';
import { ButtonDelete } from './ButtonDelete.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  const showContacts = Array.isArray(contacts) && contacts.length > 0;

  return (
    <ul>
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
                onClick={() => onDeleteContact(contact.id)}
              >
                &times;
              </ButtonDelete>
            </ContactItem>
          );
        })}
    </ul>
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
