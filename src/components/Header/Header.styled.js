import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from 'theme';

export const HeaderStyle = styled.header`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
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
  background-color: ${() => colors.accentColor};
  color: ${() => colors.textShadowColor};
  box-shadow: 5px 5px 2px 0px ${() => colors.textShadowColor};
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
    background-color: ${() => colors.textShadowColor};
    color: ${() => colors.accentColor};
    box-shadow: 5px 5px 2px 0px ${() => colors.accentColor};
  }

  &.active {
    display: none;
  }
`;

export const Welcome = styled.span`
  font-weight: bold;
  font-size: 25px;
  color: ${() => colors.textShadowColor};
  text-shadow: 0 1px 0 ${() => colors.textShadowColor};
  position: absolute;
  top: 50%;
  margin-top: -15px;
  right: 180px;
`;

export const ButtonLogOut = styled.button`
  background-color: ${() => colors.accentColor};
  color: ${() => colors.textShadowColor};
  box-shadow: 5px 5px 2px 0px ${() => colors.textShadowColor};
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 25px;
  border: none;
  border-radius: 10px;
  padding: 15px;
  max-height: auto;
  max-width: 200px;

  &: hover {
    background-color: ${() => colors.textShadowColor};
    color: ${() => colors.accentColor};
    box-shadow: 5px 5px 2px 0px ${() => colors.accentColor};
  }
`;
