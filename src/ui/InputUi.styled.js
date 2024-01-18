import styled from 'styled-components';

export const InputUi = styled.input`
  height: 25px;
  margin: 0 auto;
  font-size: 20px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  padding: 8px 15px;

  &: hover {
    box-shadow: ${({ theme }) => theme.colors.accentColor} 0px 5px 10px,
      ${({ theme }) => theme.colors.accentColor} 0px 2px 5px;
  }
`;
