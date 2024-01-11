import React from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { loginUserThunk } from 'redux/operations';
import { selectAuthentificated } from 'redux/selectors';

import { ButtonUi } from 'ui/ButtonUi.styled';
import {
  Backdrop,
  Box,
  ModalForm,
  ModalInput,
  ModalTitle,
  ModalTitleInitiated,
  Wrapper,
} from 'components/Modal/Modal.styled';

const LoginPage = () => {
  const dispatch = useDispatch();
  const authentificated = useSelector(selectAuthentificated);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const email = form.elements.userEmail.value.trim();
    const password = form.elements.userPassword.value.trim();

    dispatch(loginUserThunk({ email, password }));
  };

  if (authentificated) return <Navigate to="/contacts" />;

  return (
    <Backdrop>
      <Box>
        <Wrapper>
          <ModalTitle>Login Into Your Account</ModalTitle>
          <ModalForm onSubmit={handleSubmit}>
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
            <ButtonUi type="submit">Sign in</ButtonUi>
          </ModalForm>
        </Wrapper>
      </Box>
    </Backdrop>
  );
};

export default LoginPage;
