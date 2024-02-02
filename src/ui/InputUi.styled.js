import styled from 'styled-components';

export const InputUi = styled.input`
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  padding: 8px 15px;
  margin: 0;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  outline: none; /* Видаляє обведення при фокусі */
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.colors.accentColor} 0px 5px 10px,
      ${({ theme }) => theme.colors.accentColor} 0px 2px 5px;
  }
`;
