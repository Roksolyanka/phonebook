import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from 'theme';

export const Header = styled.header`
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
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 25px;
  border: none;
  border-radius: 10px;
  padding: 15px;
  max-height: auto;
  max-width: 200px;
  margin-right: 20px;

  &: hover {
    outline-color: transparent;
    outline-style: solid;
    box-shadow: 10px 10px 5px 0px ${() => colors.textShadowColor};
    transition: 0.3s;
    border: 1px solid ${() => colors.textShadowColor};
  }

  &.active {
    background-color: ${() => colors.textShadowColor};
    color: ${() => colors.accentColor};
    box-shadow: 5px 5px 2px 0px ${() => colors.accentColor};
  }
`;

export const Welcome = styled.span`
  font-family: 'Roboto';
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
    outline-color: transparent;
    outline-style: solid;
    box-shadow: 10px 10px 5px 0px ${() => colors.textShadowColor};
    transition: 0.3s;
    border: 1px solid ${() => colors.textShadowColor};
  }
`;

export const Footer = styled.footer`
  padding: 20px 0;
  border-top: 1px solid ${() => colors.boxShadow};
  box-shadow: 0 -1px 1px ${() => colors.accentColor};
  color: ${() => colors.accentColor};
  text-shadow: 0 1px 0 ${() => colors.textShadowColor};
  text-align: center;
`;

export const Creator = styled.a`
  color: ${() => colors.accentColor};
  text-shadow: 0 1px 0 ${() => colors.textShadowColor};

  &: hover {
    box-shadow: 10px 10px 5px 0px ${() => colors.accentColor};
    transition: 0.3s;
    color: ${() => colors.textShadowColor};
  }
`;

export const TitlePhonebook = styled.h1`
  font-family: 'Roboto';
  font-size: 100px;
  font-weight: bold;
  width: 100%;
  color: ${() => colors.secondaryColor};
  text-align: center;
  text-shadow: ${() => colors.textShadowColor} 10px 0 5px;
  margin-bottom: 20px;
  margin-top: 20px;
  box-shadow: ${() => colors.accentColor} 0px 20px 30px,
    ${() => colors.accentColor} 0px 2px 5px;
`;
