import { Notify } from 'notiflix';

export const getCurrentYear = () => new Date().getFullYear();

const isDuplicateName = (contacts, name, editingContact) =>
  contacts.some(contact => contact.name === name && editingContact !== contact);

const isDuplicateNumber = (contacts, number, editingContact) =>
  contacts.some(
    contact => contact.number === number && editingContact !== contact
  );

export const duplicateNameNotification = (contacts, name, editingContact) =>
  isDuplicateName(contacts, name, editingContact)
    ? (Notify.info(`Contact with name ${name} already exists!`), false)
    : true;

export const duplicateNumberNotification = (contacts, number, editingContact) =>
  isDuplicateNumber(contacts, number, editingContact)
    ? (Notify.info(`Contact with number ${number} already exists!`), false)
    : true;
