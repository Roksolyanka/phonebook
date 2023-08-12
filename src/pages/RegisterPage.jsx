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

    const name = form.elements.userName.value;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    dispatch(registerUserThunk({ name, email, password }));
  };

  if (authentificated) return <Navigate to="/contacts" />;

  return (
    <div>
      <h1>Register Your Account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name:</p>
          <input name="userName" type="text" required minLength={2} />
        </label>
        <br />
        <label>
          <p>Email:</p>
          <input name="userEmail" type="email" required minLength={2} />
        </label>
        <br />
        <label>
          <p>Password:</p>
          <input name="userPassword" type="password" required minLength={7} />
        </label>
        <br />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default RegisterPage;
