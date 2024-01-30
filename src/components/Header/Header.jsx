import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logoutUserThunk, refreshUserThunk } from 'redux/auth/operations';
import {
  selectAuthentificated,
  selectToken,
  selectUserName,
} from 'redux/selectors';

import {
  ButtonLogOut,
  HeaderStyle,
  NavLeft,
  NavRight,
  StyledNavLink,
  Welcome,
} from './Header.styled';

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

  const LeftContent = () => {
    if (authentificated)
      return <StyledNavLink to="/contacts">Contacts</StyledNavLink>;
    return <StyledNavLink to="/">Home</StyledNavLink>;
  };

  const RightContent = () => {
    if (authentificated)
      return (
        <>
          <Welcome>Hello, {userName}!</Welcome>
          <ButtonLogOut onClick={handleLogOut}>Log out</ButtonLogOut>
        </>
      );
    return (
      <>
        <StyledNavLink to="/login">Login</StyledNavLink>
        <StyledNavLink to="/register">Register</StyledNavLink>
      </>
    );
  };

  return (
    <HeaderStyle>
      <NavLeft>
        <LeftContent />
      </NavLeft>
      <NavRight>
        <RightContent />
      </NavRight>
    </HeaderStyle>
  );
};
