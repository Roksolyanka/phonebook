import React from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { registerUserThunk } from 'redux/operations';
import { selectAuthentificated } from 'redux/selectors';

import { ButtonUi } from 'ui/ButtonUi.styled';
import {
  ModalBackdropUi,
  ModalBoxUi,
  ModalFormUi,
  ModalInputUi,
  ModalSecondWrapperUi,
  ModalTitleUi,
} from 'ui/ModalUi.styled';
import { InputComponent } from 'components/Input/Input';

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
    <ModalBackdropUi>
      <ModalBoxUi>
        <ModalTitleUi>Register Your Account</ModalTitleUi>
        <ModalFormUi onSubmit={handleSubmit}>
          <InputComponent
            label="Name:"
            type="text"
            name="userName"
            required
            minLength={2}
            autoComplete="userName"
            wrapperStyle={ModalSecondWrapperUi}
            inputStyle={ModalInputUi}
          />
          <br />
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
          <ButtonUi type="submit">Sign up</ButtonUi>
        </ModalFormUi>
      </ModalBoxUi>
    </ModalBackdropUi>
  );
};

export default RegisterPage;
