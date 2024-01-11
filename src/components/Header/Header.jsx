import { logoutUserThunk, refreshUserThunk } from 'redux/operations';
import {
  ButtonLogOut,
  HeaderStyle,
  NavLeft,
  NavRight,
  StyledNavLink,
  Welcome,
} from './Header.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthentificated,
  selectToken,
  selectUserName,
} from 'redux/selectors';
import { useEffect } from 'react';

export const Header = () => {
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
    <HeaderStyle>
      <NavLeft>
        {authentificated ? (
          <StyledNavLink to="/contacts">Contacts</StyledNavLink>
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
    </HeaderStyle>
  );
};
