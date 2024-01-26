import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('../../pages/HomePage/Home'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/Contacts'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage/Register'));
const LoginPage = lazy(() => import('../../pages/LoginPage/Login'));

const routes = [
  { path: '/', element: <HomePage /> },
  {
    path: '/contacts',
    element: (
      <PrivateRoute redirectTo="/login">
        <ContactsPage />
      </PrivateRoute>
    ),
  },
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
];

export const RoutesList = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};
