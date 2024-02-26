import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectAuthentificated,
  selectContactsError,
  selectContactsFilter,
  selectContactsIsLoading,
  selectUserContacts,
} from 'redux/selectors';
import {
  deleteContactsThunk,
  requestContactsThunk,
} from 'redux/contacts/operations';
import { setFilter } from 'redux/contacts/reducer';

import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Loader } from 'components/Loader';

import sprite from '../../assets/sprite.svg';
import { TitlePhonebook } from 'components/App/App.styled';
import {
  ButtonAddContact,
  ContactsContainer,
  Container,
  NewContactContainer,
  NoContacts,
  TitleContacts,
} from './styled';
import { Icon } from 'components/ContactList/styled';
import { Modal } from 'components/Modal';

const ContactsPage = () => {
  const authentificated = useSelector(selectAuthentificated);
  const contacts = useSelector(selectUserContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  const filter = useSelector(selectContactsFilter);
  const [editingContact, setEditingContact] = useState(null);
  const [activeContact, setActiveContact] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(window.innerWidth > 1024);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      setIsFormVisible(window.innerWidth > 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!authentificated) return;

    dispatch(requestContactsThunk());
  }, [authentificated, dispatch]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingContact(null);
    setActiveContact(null);
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContactsThunk(contactId));
  };

  const handleEditContact = contact => {
    setEditingContact(contact);
  };

  const changeFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  const findContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = findContacts();

  return (
    <section>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <Container>
        {isFormVisible && (
          <ContactForm
            editingContact={editingContact}
            setEditingContact={setEditingContact}
            setActiveContact={setActiveContact}
          />
        )}
        <ContactsContainer>
          <TitleContacts>Contacts</TitleContacts>
          <NewContactContainer>
            <p>Create a new contact</p>
            <ButtonAddContact onClick={openModal}>
              <Icon width={'30'} height={'30'}>
                <use href={`${sprite}#icon-user-plus`}></use>
              </Icon>
            </ButtonAddContact>
          </NewContactContainer>
          {isLoading && <Loader />}
          {error && <p>Oops, some error occured...{error}</p>}
          {contacts === null ? (
            <NoContacts>No contacts found.</NoContacts>
          ) : (
            <>
              {contacts.length === 0 ? (
                <>
                  <NoContacts>No contacts found.</NoContacts>
                </>
              ) : (
                <>
                  <Filter value={filter} onChange={changeFilter} />
                  {filteredContacts.length === 0 ? (
                    <NoContacts>No contact found with this name.</NoContacts>
                  ) : (
                    <ContactList
                      contacts={filteredContacts}
                      onEditContact={handleEditContact}
                      onDeleteContact={handleDeleteContact}
                      activeContact={activeContact}
                      setActiveContact={setActiveContact}
                      onOpenModal={openModal}
                    />
                  )}
                </>
              )}
            </>
          )}
        </ContactsContainer>
      </Container>
      {showModal && (
        <Modal open={open} onClose={closeModal}>
          <ContactForm
            open={showModal}
            editingContact={editingContact}
            setEditingContact={setEditingContact}
            setActiveContact={setActiveContact}
            onCloseModal={closeModal}
          />
        </Modal>
      )}
    </section>
  );
};

export default ContactsPage;
