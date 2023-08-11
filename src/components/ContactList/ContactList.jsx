import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem.styled';
import { ListPhone } from './ListPhone.styled';
import { ButtonDelete } from './ButtonDelete.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem key={contact.id}>
          <div>
            <span>{contact.name}</span>:<ListPhone>{contact.phone}</ListPhone>
          </div>
          <ButtonDelete
            type="button"
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </ButtonDelete>
        </ContactItem>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
