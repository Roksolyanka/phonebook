import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logoutUserThunk, refreshUserThunk } from 'redux/auth/operations';
import {
  selectAuthentificated,
  selectToken,
  selectUserName,
} from 'redux/selectors';

import {
  HeaderStyle,
  NavLeft,
  NavRight,
  StyledNavLink,
  Welcome,
} from './styled';
import { ButtonUi } from 'ui/ButtonUi.styled';

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
          <ButtonUi margin={'0'} onClick={handleLogOut}>
            Log out
          </ButtonUi>
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
