import styled from 'styled-components';
import { colors } from 'theme';

export const FooterStyle = styled.footer`
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
