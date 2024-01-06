import styled from 'styled-components';

export const ContactsList = styled.ul`
  display: flex;
  list-style: none;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

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
  border-radius: 6px;
  padding: 12px 20px;
  border: 1px solid #ffe724;
  box-sizing: border-box;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &: hover {
    box-shadow: #ffe724 0px 10px 10px 0px;
  }
`;

export const ListPhone = styled.span`
  margin-left: 10px;
  color: #120c07;
`;

export const ButtonDelete = styled.button`
  background-color: #ffe724;
  color: #120c07;
  font-family: 'Roboto';
  font-size: 30px;
  border: none;
  border-radius: 5px;
  height: 32px;
  width: 50px;
  margin-left: 10px;
  vertical-align: top;
  box-shadow: 2px 2px 1px 0px #120c07;

  &: hover {
    outline-color: transparent;
    transition: 0.3s;
    transform: scale(1.03);
    border: 1px solid #120c07;
    box-shadow: 10px 10px 5px -5px #120c07;
    font-weight: bold;
  }
`;
