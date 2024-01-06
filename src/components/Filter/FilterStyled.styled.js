import styled from 'styled-components';

export const FilterStyled = styled.label`
  display: block;
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: bold;
  color: #222326;
  text-align: center;
  text-shadow: #120c07 2px 0 0;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const InputFind = styled.input`
  width: 320px;
  height: 40px;
  margin-left: 10px;
  vertical-align: top;
  font-size: 20px;
  font-weight: bold;
  background-color: #e2e2e2;

  &: hover, focus {
    box-shadow: #ffe724 0px 10px 20px, #ffe724 0px 2px 5px;
  }
`;
