import styled from 'styled-components';

export const FooterStyle = styled.footer`
  padding: 20px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.boxShadow};
  box-shadow: 0 -1px 1px ${({ theme }) => theme.colors.accentColor};
  color: ${({ theme }) => theme.colors.accentColor};
  text-shadow: 0 1px 0 ${({ theme }) => theme.colors.textShadowColor};
  text-align: center;
`;

export const Creator = styled.a`
  color: ${({ theme }) => theme.colors.accentColor};
  text-shadow: 0 1px 0 ${({ theme }) => theme.colors.textShadowColor};

  &: hover {
    box-shadow: 10px 10px 5px 0px ${({ theme }) => theme.colors.accentColor};
    transition: 0.3s;
    color: ${({ theme }) => theme.colors.textShadowColor};
  }
`;
