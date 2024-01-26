import { Notify } from 'notiflix';

export const getCurrentYear = () => {
  const currentYear = new Date().getFullYear();
  return currentYear;
};

export const validateContactName = (contacts, name, editingContact) => {
  if (
    contacts.some(
      contact => contact.name === name && editingContact !== contact
    )
  ) {
    Notify.info(`Contact with name ${name} already exists!`);
    return false;
  }
  return true;
};

export const validateContactNumber = (contacts, number, editingContact) => {
  if (
    contacts.some(
      contact => contact.number === number && editingContact !== contact
    )
  ) {
    Notify.info(`Contact with number ${number} already exists!`);
    return false;
  }
  return true;
};
