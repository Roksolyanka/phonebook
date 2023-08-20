import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthentificated } from 'redux/authReducer';
import {
  deleteContactsThunk,
  requestContactsThunk,
} from 'redux/contactsOperations';
import {
  selectContactsError,
  selectContactsFilter,
  selectContactsIsLoading,
  selectUserContacts,
  setFilter,
} from 'redux/contactsReducer';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';

import { TitlePhonebook } from 'components/App/App.styled';
import { Container, TitleContacts } from './ContactsPage.styled';

const ContactsPage = () => {
  const authentificated = useSelector(selectAuthentificated);
  const contacts = useSelector(selectUserContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  const filter = useSelector(selectContactsFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!authentificated) return;

    dispatch(requestContactsThunk());
  }, [authentificated, dispatch]);

  const handleDeleteContact = contactId => {
    dispatch(deleteContactsThunk(contactId));
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
        <ContactForm />
        <div>
          <TitleContacts>Contacts</TitleContacts>
          {isLoading && <Loader />}
          {error && <p>Oops, some error occured...{error}</p>}
          <Filter value={filter} onChange={changeFilter} />
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={handleDeleteContact}
          />
        </div>
      </Container>
    </section>
  );
};

export default ContactsPage;
