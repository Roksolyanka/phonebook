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
import { useFormik } from 'formik';
import { registerSchema } from 'schemas';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const authentificated = useSelector(selectAuthentificated);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: registerSchema,
  });

  const handleSubmit = event => {
    event.preventDefault();

    const name = formik.values.name.trim();
    const email = formik.values.email.trim();
    const password = formik.values.password.trim();

    dispatch(registerUserThunk({ name, email, password }));
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
        <ModalTitleUi>Register Your Account</ModalTitleUi>
        <ModalFormUi onSubmit={handleSubmit}>
          <InputComponent
            label="Name:"
            type="text"
            name="name"
            placeholder="Enter your name"
            autoComplete="name"
            required
            wrapperStyle={ModalSecondWrapperUi}
            inputStyle={ModalInputUi}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            formik={formik}
            className={
              formik.errors.name && formik.touched.name ? 'input-error' : ''
            }
          />
          <br />
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
            Sign up
          </ButtonUi>
        </ModalFormUi>
      </ModalBoxUi>
    </ModalBackdropUi>
  );
};

export default RegisterPage;
