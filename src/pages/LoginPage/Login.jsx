import React from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { loginUserThunk } from 'redux/operations';
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
import { useFormik } from 'formik';
import { loginSchema } from 'schemas';

const LoginPage = () => {
  const dispatch = useDispatch();
  const authentificated = useSelector(selectAuthentificated);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
  });

  const handleSubmit = event => {
    event.preventDefault();

    const email = formik.values.email.trim();
    const password = formik.values.password.trim();

    dispatch(loginUserThunk({ email, password }));
  };

  const isFormValid = () => {
    return (
      Object.keys(formik.errors).length === 0 &&
      Object.keys(formik.touched).length > 0
    );
  };

  if (authentificated) return <Navigate to="/contacts" />;

  return (
    <ModalBackdropUi>
      <ModalBoxUi>
        <ModalTitleUi>Login Into Your Account</ModalTitleUi>
        <ModalFormUi onSubmit={handleSubmit}>
          <InputComponent
            label="Email:"
            name="email"
            type="email"
            placeholder="Enter email"
            autoComplete="email"
            required
            wrapperStyle={ModalSecondWrapperUi}
            inputStyle={ModalInputUi}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            formik={formik}
            className={
              formik.errors.email && formik.touched.email ? 'input-error' : ''
            }
          />
          <br />
          <InputComponent
            label="Password:"
            name="password"
            type="password"
            placeholder="Enter password"
            autoComplete="current-password"
            required
            wrapperStyle={ModalSecondWrapperUi}
            inputStyle={ModalInputUi}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            formik={formik}
            className={
              formik.errors.password && formik.touched.password
                ? 'input-error'
                : ''
            }
          />
          <ButtonUi
            disabled={!isFormValid() || formik.isSubmitting}
            type="submit"
          >
            Sign in
          </ButtonUi>
        </ModalFormUi>
      </ModalBoxUi>
    </ModalBackdropUi>
  );
};

export default LoginPage;
