import { Button } from 'components/Button/Button.styled';
import {
  Backdrop,
  Box,
  ModalForm,
  ModalInput,
  ModalTitle,
  ModalTitleInitiated,
  Wrapper,
} from 'components/Modal/Modal.styled';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthentificated } from 'redux/authReducer';
import { registerUserThunk } from 'redux/operations';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const authentificated = useSelector(selectAuthentificated);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = form.elements.userName.value.trim();
    const email = form.elements.userEmail.value.trim();
    const password = form.elements.userPassword.value.trim();

    dispatch(registerUserThunk({ name, email, password }));
  };

  if (authentificated) return <Navigate to="/contacts" />;

  return (
    <Backdrop>
      <Box>
        <Wrapper>
          <ModalTitle>Register Your Account</ModalTitle>
          <ModalForm onSubmit={handleSubmit}>
            <label>
              <ModalTitleInitiated>Name:</ModalTitleInitiated>
              <ModalInput
                name="userName"
                type="text"
                required
                minLength={2}
                autoComplete="userName"
              />
            </label>
            <br />
            <label>
              <ModalTitleInitiated>Email:</ModalTitleInitiated>
              <ModalInput
                name="userEmail"
                type="email"
                required
                minLength={2}
                autoComplete="email"
              />
            </label>
            <br />
            <label>
              <ModalTitleInitiated>Password:</ModalTitleInitiated>
              <ModalInput
                name="userPassword"
                type="password"
                required
                minLength={7}
                autoComplete="current-password"
              />
            </label>
            <br />
            <Button type="submit">Sign up</Button>
          </ModalForm>
        </Wrapper>
      </Box>
    </Backdrop>
  );
};

export default RegisterPage;
