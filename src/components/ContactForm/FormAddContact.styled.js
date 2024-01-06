import styled from 'styled-components';

export const ContainerForm = styled.div`
  margin-top: 100px;
  padding-left: 30px;
`;

export const Form = styled.form`
  display: grid;
  width: 600px;
  margin: 0 auto;
  border: 2px solid #ffe724;
  border-radius: 4px;
  box-shadow: #ffe724 5px 0 5px;
  padding-top: 20px;
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: bold;

  text-align: center;
  color: #e2e2e2;
  text-align: center;
  text-shadow: #120c07 5px 0 1px;
  position: sticky;
  top: 50px;
`;

export const Input = styled.input`
  width: 550px;
  height: 25px;
  margin: 0 auto;
  font-size: 20px;
  font-weight: bold;
  background-color: #e2e2e2;

  &: hover {
    box-shadow: #ffe724 0px 5px 10px, #ffe724 0px 2px 5px;
  }
`;
