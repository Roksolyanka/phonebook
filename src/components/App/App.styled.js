import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
  background-color: #ffe724;
  color: #120c07;
  box-shadow: 5px 5px 2px 0px #120c07;
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
    box-shadow: 10px 10px 5px 0px #120c07;
    transition: 0.3s;
    border: 1px solid #120c07;
  }

  &.active {
    background-color: #120c07;
    color: #ffe724;
    box-shadow: 5px 5px 2px 0px #ffe724;
  }
`;

export const Welcome = styled.span`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 25px;
  color: #120c07;
  text-shadow: 0 1px 0 #120c07;
  position: absolute;
  top: 50%;
  margin-top: -15px;
  right: 180px;
`;

export const ButtonLogOut = styled.button`
  background-color: #ffe724;
  color: #120c07;
  box-shadow: 5px 5px 2px 0px #120c07;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 25px;
  border: none;
  border-radius: 10px;
  padding: 15px;
  max-height: auto;
  max-width: 200px;
  margin: 20px auto;

  &: hover {
    outline-color: transparent;
    outline-style: solid;
    box-shadow: 10px 10px 5px 0px #120c07;
    transition: 0.3s;
    border: 1px solid #120c07;
  }
`;

export const Footer = styled.footer`
  padding: 20px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 -1px 1px #ffe724;
  color: #ffe724;
  text-shadow: 0 1px 0 #120c07;
  text-align: center;
`;

export const Creator = styled.a`
  color: #ffe724;
  text-shadow: 0 1px 0 #120c07;

  &: hover {
    box-shadow: 10px 10px 5px 0px #ffe724;
    transition: 0.3s;
    color: #120c07;
  }
`;

export const TitlePhonebook = styled.h1`
  font-family: 'Roboto';
  font-size: 100px;
  font-weight: bold;
  width: 100%;
  color: #e2e2e2;
  text-align: center;
  text-shadow: #120c07 10px 0 5px;
  margin-bottom: 20px;
  margin-top: 20px;
  box-shadow: #ffe724 0px 20px 30px, #ffe724 0px 2px 5px;
`;
