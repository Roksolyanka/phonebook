import React from 'react';
import { Form } from './Form.styled';
import { Input } from './Input.styled';
import { Button } from './Button.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContactsThunk } from 'redux/contactsOperations';
import { selectUserContacts } from 'redux/contactsReducer';

export const ContactForm = () => {
  const contacts = useSelector(selectUserContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = form.elements.contactName.value;
    const number = form.elements.contactNumber.value;

    if (contacts.some(contact => contact.name === name))
      return alert(`Contact with name ${name} already exists!`);

    if (contacts.some(contact => contact.number === number))
      return alert(`Contact with number ${number} already exists!`);

    dispatch(addContactsThunk({ name, number }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>Name: </label>
      <Input type="text" name="contactName" required />

      <label>Number: </label>
      <Input type="text" name="contactNumber" required />

      <Button type="submit">Add contact</Button>
    </Form>
  );
};
