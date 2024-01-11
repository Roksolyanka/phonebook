import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';

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
      <Footer></Footer>
    </div>
  );
};
