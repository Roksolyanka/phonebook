import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  padding: 30px; 
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
  //   flex-shrink: 0;
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
