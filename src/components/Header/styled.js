import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
  align-items: center;
  gap: 10px;

  @media (min-width: 640px) {
    gap: 20px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  background-color: ${({ theme }) => theme.colors.accentColor};
  color: ${({ theme }) => theme.colors.textShadowColor};
  box-shadow: 5px 5px 2px 0px ${({ theme }) => theme.colors.textShadowColor};
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
  border: none;
  border-radius: 10px;
  padding: 10px;
  max-height: auto;
  max-width: 200px;

  &: hover {
    background-color: ${({ theme }) => theme.colors.textShadowColor};
    color: ${({ theme }) => theme.colors.accentColor};
    box-shadow: 5px 5px 2px 0px ${({ theme }) => theme.colors.accentColor};
  }

  &.active {
    display: none;
  }

  @media (min-width: 640px) {
    font-size: 25px;
    padding: 15px;
  }
`;

export const Welcome = styled.span`
  font-weight: bold;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textShadowColor};
  text-shadow: 0 1px 0 ${({ theme }) => theme.colors.textShadowColor};

  @media (min-width: 640px) {
    font-size: 25px;
  }
`;
