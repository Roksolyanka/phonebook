import styled from 'styled-components';

export const TitlePhonebook = styled.h1`
  font-size: 100px;
  font-weight: bold;
  width: 100%;
  color: ${({ theme }) => theme.colors.secondaryColor};
  text-align: center;
  text-shadow: ${({ theme }) => theme.colors.textShadowColor} 10px 0 5px;
  margin-bottom: 10px;
  margin-top: 10px;
  box-shadow: ${({ theme }) => theme.colors.accentColor} 0px 20px 30px,
    ${({ theme }) => theme.colors.accentColor} 0px 2px 5px;
`;
