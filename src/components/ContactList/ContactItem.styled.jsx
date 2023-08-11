import styled from 'styled-components';

export const ContactItem = styled.li`
  font-family: 'Roboto';
  font-size: 35px;
  font-weight: bold;
  color: #222326;
  text-align: center;
  text-shadow: #120c07 2px 0 1px;
  margin: 0 auto 5px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 750px;

  &: hover {
    box-shadow: #ffe724 0px 10px 10px 0px;
  }
`;
