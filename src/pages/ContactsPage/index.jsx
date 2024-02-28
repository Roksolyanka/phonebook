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
import { Modal } from 'components/Modal';
import { Icon } from 'components/Icon';

import {
  ButtonAddContact,
  ContactsContainer,
  Container,
  NewContactContainer,
  NoContacts,
  TitleContacts,
} from './styled';
import { TitlePhonebook } from 'components/App/App.styled';

import { findItem } from 'helpers/helper';

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

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
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

  const handleChangeFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  const filteredContacts = contacts ? findItem(contacts, 'name', filter) : [];

  return (
    <section>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <Container>
        {isFormVisible && (
          <ContactForm
            editingContact={editingContact}
            setEditingContact={setEditingContact}
            setActiveContact={setActiveContact}
            onCloseModal={handleCloseModal}
          />
        )}
        <ContactsContainer>
          <TitleContacts>Contacts</TitleContacts>
          <NewContactContainer>
            <p>Create a new contact</p>
            <ButtonAddContact onClick={handleOpenModal}>
              <Icon name="icon-user-plus" width="30px" height="30px"></Icon>
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
                  <Filter value={filter} onChange={handleChangeFilter} />
                  {filteredContacts.length === 0 ? (
                    <NoContacts>No contact found with this name.</NoContacts>
                  ) : (
                    <ContactList
                      contacts={filteredContacts}
                      onEditContact={handleEditContact}
                      onDeleteContact={handleDeleteContact}
                      activeContact={activeContact}
                      setActiveContact={setActiveContact}
                      onOpenModal={handleOpenModal}
                    />
                  )}
                </>
              )}
            </>
          )}
        </ContactsContainer>
      </Container>
      {showModal && (
        <Modal open={open} onClose={handleCloseModal}>
          <ContactForm
            open={showModal}
            editingContact={editingContact}
            setEditingContact={setEditingContact}
            setActiveContact={setActiveContact}
            onCloseModal={handleCloseModal}
          />
        </Modal>
      )}
    </section>
  );
};

export default ContactsPage;
