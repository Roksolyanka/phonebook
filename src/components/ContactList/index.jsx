import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix';

import { ModalDelete } from 'components/ModalDelete';
import { ContactItemComponent } from 'components/ContactItem';

import { ContactsList } from './styled';

export const ContactList = ({
  contacts,
  onDeleteContact,
  onEditContact,
  activeContact,
  setActiveContact,
  onOpenModal,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const showContacts = Array.isArray(contacts) && contacts.length > 0;

  const handleOpenModal = contact => {
    setSelectedContact(contact);
    setShowModal(true);
    setActiveContact(contact);
  };

  const handleCloseModal = () => {
    setSelectedContact(null);
    setShowModal(false);
    setActiveContact(null);
  };

  const handleCallContact = contact => {
    const phoneNumber = contact.number;
    window.location.href = `tel:${phoneNumber}`;
    setActiveContact(contact);

    setTimeout(() => {
      setActiveContact(null);
    }, 10000); //це тимчасово
  };

  const handleEditContact = contact => {
    if (window.innerWidth <= 1024) {
      onOpenModal();
      onEditContact(contact);
      setActiveContact(contact);
    } else {
      onEditContact(contact);
      setActiveContact(contact);
    }
  };

  return (
    <ContactsList>
      {showContacts &&
        contacts.map(contact => {
          return (
            <ContactItemComponent
              key={contact.id}
              contact={contact}
              activeContact={activeContact}
              handleCallContact={handleCallContact}
              handleEditContact={handleEditContact}
              handleOpenModal={handleOpenModal}
            />
          );
        })}
      <ModalDelete
        open={showModal}
        contact={selectedContact}
        onDeleteContact={() => {
          onDeleteContact(selectedContact.id);
          Notify.success(
            `Contact ${selectedContact.name} successfully deleted.`
          );
          setShowModal(false);
        }}
        onNoDeleteContact={handleCloseModal}
      />
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
  onOpenModal: PropTypes.func.isRequired,
  activeContact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  setActiveContact: PropTypes.func,
};
