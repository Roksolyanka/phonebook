import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { addContactsThunk } from 'redux/contactsOperations';
import { selectUserContacts } from 'redux/selectors';

import Notiflix from 'notiflix';

import { ButtonUi } from 'ui/ButtonUi.styled';
import { ContainerForm, Form, Input } from './FormAddContact.styled';

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
      return Notiflix.Notify.info(`Contact with name ${name} already exists!`);

    if (contacts.some(contact => contact.number === number))
      return Notiflix.Notify.info(
        `Contact with number ${number} already exists!`
      );

    dispatch(addContactsThunk({ name, number }));

    setContactName('');
    setContactNumber('');

    Notiflix.Notify.success(`Contact ${name} successfully added.`);
  };

  return (
    <ContainerForm>
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

        <ButtonUi type="submit">Add contact</ButtonUi>
      </Form>
    </ContainerForm>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.array,
};
