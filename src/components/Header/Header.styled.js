import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonUi } from 'ui/ButtonUi.styled';

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
  position: relative;
`;

export const NavLeft = styled.nav`
  flex: 1;
`;

export const NavRight = styled.nav`
  display: flex;
  gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  background-color: ${({ theme }) => theme.colors.accentColor};
  color: ${({ theme }) => theme.colors.textShadowColor};
  box-shadow: 5px 5px 2px 0px ${({ theme }) => theme.colors.textShadowColor};
  font-weight: bold;
  font-size: 25px;
  text-decoration: none;
  border: none;
  border-radius: 10px;
  padding: 15px;
  max-height: auto;
  max-width: 200px;
  margin-right: 20px;

  &: hover {
    background-color: ${({ theme }) => theme.colors.textShadowColor};
    color: ${({ theme }) => theme.colors.accentColor};
    box-shadow: 5px 5px 2px 0px ${({ theme }) => theme.colors.accentColor};
  }

  &.active {
    display: none;
  }
`;

export const Welcome = styled.span`
  font-weight: bold;
  font-size: 25px;
  color: ${({ theme }) => theme.colors.textShadowColor};
  text-shadow: 0 1px 0 ${({ theme }) => theme.colors.textShadowColor};
  position: absolute;
  top: 50%;
  margin-top: -15px;
  right: 180px;
`;

export const ButtonLogOut = styled(ButtonUi)`
  margin: 0;
`;
