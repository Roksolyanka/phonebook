import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import PrivateRoute from 'components/PrivateRoute';

const HomePage = lazy(() => import('../../pages/HomePage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));

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
