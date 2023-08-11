import React from 'react';
import PropTypes from 'prop-types';
import { Form } from './Form.styled';
import { Input } from './Input.styled';
import { Button } from './Button.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setNumber } from 'redux/authReducer';
import { selectName, selectPhone } from 'redux/selectors';

export const ContactForm = ({ onSubmit }) => {
  const name = useSelector(selectName);
  const phone = useSelector(selectPhone);
  const dispatch = useDispatch();

  const changeForm = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      dispatch(setName(value));
    } else if (name === 'number') {
      dispatch(setNumber(value));
    }
  };

  const submitForm = event => {
    event.preventDefault();
    onSubmit(name, phone);
    dispatch(setName(''));
    dispatch(setNumber(''));
  };

  return (
    <Form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <Input
        type="text"
        id="name"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={changeForm}
      />

      <label htmlFor="number">Number</label>
      <Input
        type="tel"
        id="number"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={phone}
        onChange={changeForm}
      />

      <Button type="submit">Add contact</Button>
    </Form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
