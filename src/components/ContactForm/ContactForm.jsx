import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { addContactsThunk, editContactThunk } from 'redux/contactsOperations';
import { selectUserContacts } from 'redux/selectors';

import Notiflix from 'notiflix';

import {
  ButtonForm,
  ContainerForm,
  Form,
  InputStyle,
  WrapperForButton,
  WrapperStyle,
} from './FormAddContact.styled';
import { InputComponent } from 'components/Input/Input';

export const ContactForm = ({ editingContact, setEditingContact }) => {
  const contacts = useSelector(selectUserContacts);
  const dispatch = useDispatch();

  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  useEffect(() => {
    if (editingContact) {
      setContactName(editingContact.name);
      setContactNumber(editingContact.number);
    }
  }, [editingContact]);

  const handleCancel = () => {
    setEditingContact(null);
    setContactName('');
    setContactNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const number = form.elements.contactNumber.value.trim();
    let name = form.elements.contactName.value.trim();
    const nameWords = name.split(' ');
    name = nameWords
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    if (
      contacts.some(
        contact => contact.name === name && editingContact !== contact
      )
    )
      return Notiflix.Notify.info(`Contact with name ${name} already exists!`);

    if (
      contacts.some(
        contact => contact.number === number && editingContact !== contact
      )
    )
      return Notiflix.Notify.info(
        `Contact with number ${number} already exists!`
      );

    if (editingContact) {
      dispatch(editContactThunk({ id: editingContact.id, name, number }));
    } else {
      dispatch(addContactsThunk({ name, number }));
    }

    Notiflix.Notify.success(
      `Contact ${name} successfully ${editingContact ? 'edited' : 'added'}.`
    );

    setContactName('');
    setContactNumber('');
    setEditingContact(null);
  };

  return (
    <ContainerForm>
      <Form onSubmit={handleSubmit}>
        <InputComponent
          label="Name:"
          type="text"
          name="contactName"
          value={contactName}
          onChange={e => setContactName(e.target.value)}
          required
          wrapperStyle={WrapperStyle}
          inputStyle={InputStyle}
        />
        <InputComponent
          label="Number:"
          type="text"
          name="contactNumber"
          value={contactNumber}
          onChange={e => setContactNumber(e.target.value)}
          required
          wrapperStyle={WrapperStyle}
          inputStyle={InputStyle}
        />
        <WrapperForButton>
          <ButtonForm type="submit">
            {editingContact ? 'Edit contact' : 'Add contact'}
          </ButtonForm>
          {editingContact && (
            <ButtonForm type="button" onClick={handleCancel}>
              Cancel
            </ButtonForm>
          )}
        </WrapperForButton>
      </Form>
    </ContainerForm>
  );
};

ContactForm.propTypes = {
  editingContact: PropTypes.object,
  setEditingContact: PropTypes.func,
  contacts: PropTypes.array,
};
