import { Loader } from 'components/Loader/Loader';
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
import { Container } from 'components/App/Container.styled';
import { ContainerForm } from 'components/App/ContainerForm.styled';
import { TitlePhonebook } from 'components/App/TitlePhonebook.styled';
import { TitleContacts } from 'components/App/TitleContacts.styled';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';

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
        <ContainerForm>
          <ContactForm />
        </ContainerForm>
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
