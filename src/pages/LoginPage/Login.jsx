import React from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { loginUserThunk } from 'redux/operations';
import { selectAuthentificated } from 'redux/selectors';

import { ButtonUi } from 'ui/ButtonUi.styled';
import {
  ModalBackdropUi,
  ModalBoxUi,
  ModalFirstWrapperUi,
  ModalFormUi,
  ModalInputUi,
  ModalSecondWrapperUi,
  ModalTitleUi,
} from 'ui/ModalUi.styled';
import { InputComponent } from 'components/Input/Input';

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
    <ModalBackdropUi>
      <ModalBoxUi>
        <ModalFirstWrapperUi>
          <ModalTitleUi>Login Into Your Account</ModalTitleUi>
          <ModalFormUi onSubmit={handleSubmit}>
            <InputComponent
              label="Email:"
              name="userEmail"
              type="email"
              required
              minLength={2}
              autoComplete="email"
              wrapperStyle={ModalSecondWrapperUi}
              inputStyle={ModalInputUi}
            />
            <br />
            <InputComponent
              label="Password:"
              name="userPassword"
              type="password"
              required
              minLength={7}
              autoComplete="current-password"
              wrapperStyle={ModalSecondWrapperUi}
              inputStyle={ModalInputUi}
            />
            <ButtonUi type="submit">Sign in</ButtonUi>
          </ModalFormUi>
        </ModalFirstWrapperUi>
      </ModalBoxUi>
    </ModalBackdropUi>
  );
};

export default LoginPage;
