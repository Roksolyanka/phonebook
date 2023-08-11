// import React, { lazy, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { ContactForm } from 'components/ContactForm/ContactForm';
// import { ContactList } from 'components/ContactList/ContactList';
// import { Filter } from 'components/Filter/Filter';
// import { Loader } from 'components/Loader/Loader';

// import { TitlePhonebook } from './TitlePhonebook.styled';
// import { TitleContacts } from './TitleContacts.styled';
// import { NoContacts } from './NoContacts.styled';

// import {
//   deleteContact,
//   setFilter,
//   setName,
//   setNumber,
// } from 'redux/contactsDetailsSlice';

// import {
//   addContactDataThunk,
//   deleteContactDataThunk,
//   fetchContactDataThunk,
// } from 'redux/contactsApi';

// import {
//   selectContacts,
//   selectError,
//   selectFilter,
//   // selectFindContacts,
//   selectIsLoading,
//   selectName,
//   selectPhone,
// } from 'redux/selectors';
// import { Container } from './Container.styled';
// import { ContainerForm } from './ContainerForm.styled';

// export const App = () => {
//   const contacts = useSelector(selectContacts);
//   const filter = useSelector(selectFilter);
//   const name = useSelector(selectName);
//   const phone = useSelector(selectPhone);
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);
//   // const findContacts = useSelector(selectFindContacts)

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContactDataThunk());
//   }, [dispatch]);

//   const addContact = () => {
//     const contactNameExists = duplicationNameContacts(name);
//     const contactNumberExists = duplicationNumberContacts(phone);
//     if (contactNameExists) {
//       alert(`${name} is already in contacts!`);
//       return;
//     } else if (contactNumberExists) {
//       alert(`${phone} is already in contacts!`);
//       return;
//     }

//     const contact = {
//       name,
//       phone,
//     };
//     dispatch(addContactDataThunk(contact));
//     dispatch(setName(''));
//     dispatch(setNumber(''));
//   };

//   const changeFilter = event => {
//     dispatch(setFilter(event.target.value));
//   };

//   const findContacts = () => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts?.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   const deleteContacts = async contactId => {
//     dispatch(deleteContact(contactId));

//     try {
//       await dispatch(deleteContactDataThunk(contactId));
//     } catch (error) {
//       dispatch(fetchContactDataThunk());
//     }
//   };

//   const duplicationNameContacts = name => {
//     return contacts.some(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );
//   };

//   const duplicationNumberContacts = phone => {
//     return contacts.some(
//       contact => contact.phone === phone
//     );
//   };

//   const filteredContacts = findContacts();

//   return (
//     <div>
//       <TitlePhonebook>Phonebook</TitlePhonebook>
//       <Container>
//         <ContainerForm>
//           <ContactForm
//             name={name}
//             number={phone}
//             onChangeName={name => dispatch(setName(name))}
//             onChangeNumber={phone => dispatch(setNumber(phone))}
//             onSubmit={addContact}
//           />
//         </ContainerForm>
//         <div>
//           <TitleContacts>Contacts</TitleContacts>
//           {isLoading ? (
//             <Loader></Loader>
//           ) : error ? (
//             <p>Error: {error}</p>
//           ) : contacts.length > 0 ? (
//             <>
//               <Filter value={filter} onChange={changeFilter} />
//               <ContactList
//                 contacts={filteredContacts}
//                 onDeleteContact={deleteContacts}
//               />
//             </>
//           ) : (
//             <NoContacts>No contacts found.</NoContacts>
//           )}
//         </div>
//       </Container>
//     </div>
//   );
// };

import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { StyledNavLink } from 'components/App/App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthentificated, selectToken } from 'redux/authReducer';
import { logoutUserThunk, refreshUserThunk } from 'redux/operations';

const HomePage = lazy(() => import('../../pages/HomePage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const authentificated = useSelector(selectAuthentificated);

  useEffect(() => {
    if (!token) return;
    dispatch(refreshUserThunk());
  }, [token, dispatch]);

  const handleLogOut = () => {
    dispatch(logoutUserThunk());
  };

  return (
    <div>
      <header>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          {authentificated ? (
            <>
              <StyledNavLink to="/contacts">Contacts</StyledNavLink>
              <button onClick={handleLogOut}>Log out</button>
            </>
          ) : (
            <>
              <StyledNavLink to="/login">Login</StyledNavLink>
              <StyledNavLink to="/register">Register</StyledNavLink>
            </>
          )}
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
