import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

import { Creator, Footer } from 'components/App/App.styled';
import { Header } from 'components/Header/Header';

const HomePage = lazy(() => import('../../pages/HomePage/Home'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/Contacts'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage/Register'));
const LoginPage = lazy(() => import('../../pages/LoginPage/Login'));

export const App = () => {
  return (
    <div id="app-container">
      <Header></Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login">
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer>
        <span>© 2023 Created by </span>
        <Creator href="https://github.com/Roksolyanka">
          Roksolana Kushnir
        </Creator>
      </Footer>
    </div>
  );
};
