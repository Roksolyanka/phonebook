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

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';

import { TitlePhonebook } from 'components/App/App.styled';
import {
  ContactsContainer,
  Container,
  NoContacts,
  TitleContacts,
} from './ContactsPage.styled';

const ContactsPage = () => {
  const authentificated = useSelector(selectAuthentificated);
  const contacts = useSelector(selectUserContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  const filter = useSelector(selectContactsFilter);
  const [editingContact, setEditingContact] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!authentificated) return;

    dispatch(requestContactsThunk());
  }, [authentificated, dispatch]);

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
        <ContactForm
          editingContact={editingContact}
          setEditingContact={setEditingContact}
        />
        <ContactsContainer>
          <TitleContacts>Contacts</TitleContacts>
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
                    />
                  )}
                </>
              )}
            </>
          )}
        </ContactsContainer>
      </Container>
    </section>
  );
};

export default ContactsPage;
