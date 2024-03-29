import styled from 'styled-components';

export const TitlePhonebook = styled.h1`
  font-size: 35px;
  font-weight: bold;
  width: 100%;
  color: ${({ theme }) => theme.colors.secondaryColor};
  text-align: center;
  text-shadow: ${({ theme }) => theme.colors.textShadowColor} 10px 0 5px;
  margin: 10px 0;
  box-shadow: ${({ theme }) => `${theme.colors.accentColor} 0px 20px 30px,
    ${theme.colors.accentColor} 0px 2px 5px`};

  @media (min-width: ${({ theme }) => theme.breakpoints.values.tablet}) {
    font-size: 50px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.laptop}) {
    font-size: 70px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.desktop}) {
    font-size: 100px;
  }
`;
