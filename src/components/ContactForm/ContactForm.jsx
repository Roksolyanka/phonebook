import React, { useState } from 'react';
import { Form } from './Form.styled';
import { Input } from './Input.styled';
import { Button } from './Button.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContactsThunk } from 'redux/contactsOperations';
import { selectUserContacts } from 'redux/contactsReducer';

export const ContactForm = () => {
  const contacts = useSelector(selectUserContacts);
  const dispatch = useDispatch();

 const [contactName, setContactName] = useState('');
 const [contactNumber, setContactNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = form.elements.contactName.value.trim();
    const number = form.elements.contactNumber.value.trim();

    if (contacts.some(contact => contact.name === name))
      return alert(`Contact with name ${name} already exists!`);

    if (contacts.some(contact => contact.number === number))
      return alert(`Contact with number ${number} already exists!`);

    dispatch(addContactsThunk({ name, number }));

    setContactName('');
    setContactNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>Name: </label>
      <Input
        type="text"
        name="contactName"
        value={contactName}
        onChange={e => setContactName(e.target.value)}
        required
      />

      <label>Number: </label>
      <Input
        type="text"
        name="contactNumber"
        value={contactNumber}
        onChange={e => setContactNumber(e.target.value)}
        required
      />

      <Button type="submit">Add contact</Button>
    </Form>
  );
};
