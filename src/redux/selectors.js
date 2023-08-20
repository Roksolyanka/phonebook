// import { createSelector } from '@reduxjs/toolkit';

export const selectUserContacts = state => state.contacts.contacts;
export const selectContactsIsLoading = state => state.contacts.isLoading;
export const selectContactsError = state => state.contacts.error;
export const selectContactsFilter = state => state.contacts.filter;
export const selectUserLoading = state => state.auth.isLoading;
export const selectUserError = state => state.auth.error;
export const selectToken = state => state.auth.token;
export const selectUserData = state => state.auth.userData;
export const selectAuthentificated = state => state.auth.authentificated;
export const selectUserName = state => state.auth.userData?.name;

// export const selectFindContacts = createSelector(
//   [selectFilter, selectContacts],
//   (filter, contacts) => {
//     return contacts?.filter(contact => {
//       console.log('Відбулась дороговартісна операція (цикл в циклі)');
//       return contact.name.toLowerCase().includes(filter.toLowerCase());
//     });
//   }
// );
