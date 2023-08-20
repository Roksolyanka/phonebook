import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { logoutUserThunk, refreshUserThunk } from 'redux/operations';
import {
  selectAuthentificated,
  selectToken,
  selectUserName,
} from 'redux/selectors';

import { Loader } from 'components/Loader/Loader';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

import {
  ButtonLogOut,
  Creator,
  Footer,
  Header,
  NavLeft,
  NavRight,
  StyledNavLink,
  Welcome,
} from 'components/App/App.styled';

const HomePage = lazy(() => import('../../pages/HomePage/Home'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/Contacts'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage/Register'));
const LoginPage = lazy(() => import('../../pages/LoginPage/Login'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const authentificated = useSelector(selectAuthentificated);
  const userName = useSelector(selectUserName);

  useEffect(() => {
    if (!token || authentificated) return;
    dispatch(refreshUserThunk());
  }, [token, dispatch, authentificated]);

  const handleLogOut = () => {
    dispatch(logoutUserThunk());
  };

  return (
    <div id="app-container">
      <Header>
        <NavLeft>
          {authentificated ? (
            <>
              <StyledNavLink to="/">Home</StyledNavLink>
              <StyledNavLink to="/contacts">Contacts</StyledNavLink>
            </>
          ) : (
            <StyledNavLink to="/">Home</StyledNavLink>
          )}
        </NavLeft>
        <NavRight>
          {authentificated ? (
            <>
              <Welcome>Hello, {userName}!</Welcome>
              <ButtonLogOut onClick={handleLogOut}>Log out</ButtonLogOut>
            </>
          ) : (
            <>
              <StyledNavLink to="/login">Login</StyledNavLink>
              <StyledNavLink to="/register">Register</StyledNavLink>
            </>
          )}
        </NavRight>
      </Header>
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
