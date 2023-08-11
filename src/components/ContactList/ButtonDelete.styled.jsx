import styled from 'styled-components';

export const ButtonDelete = styled.button`
  background-color: #ffe724;
  color: #120c07;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 10px;
  border: none;
  border-radius: 5px;
  height: 32px;
  width: 100px;
  margin-left: 10px;
  vertical-align: top;
  box-shadow: 2px 2px 1px 0px #120c07;

  &: hover {
    outline-color: transparent;
    transition: 0.3s;
    transform: scale(1.03);
    border: 1px solid #120c07;
    box-shadow: 10px 10px 5px -5px #120c07;
  }
`;
