import styled from 'styled-components';
import { colors } from 'theme';

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
