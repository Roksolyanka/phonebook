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

export const App = () => {
  return (
    <div id="app-container">
      <Header></Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Suspense>
      </main>
      <Footer></Footer>
    </div>
  );
};
