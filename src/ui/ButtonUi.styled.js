import styled from 'styled-components';

export const ButtonUi = styled.button`
  background-color: ${({ theme }) => theme.colors.accentColor};
  color: ${({ theme }) => theme.colors.textShadowColor};
  box-shadow: 5px 5px 2px 0px ${({ theme }) => theme.colors.textShadowColor};
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 25px;
  border: none;
  border-radius: 10px;
  padding: 15px;
  max-height: auto;
  width: 170px;
  margin: 20px;
  cursor: pointer;
  outline: none; /* Видаляє обведення при фокусі */

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.textShadowColor};
    color: ${({ theme }) => theme.colors.accentColor};
    box-shadow: 5px 5px 2px 0px ${({ theme }) => theme.colors.accentColor};
    fill: ${({ theme }) => theme.colors.accentColor};
  }

  &:disabled {
    background-color: #ccc;
    color: #888;
    cursor: not-allowed;
    border: 1px solid #999;
  }

  &:disabled:hover,
  &:disabled:focus {
    box-shadow: 5px 5px 2px 0px ${({ theme }) => theme.colors.textShadowColor};
  }
`;
