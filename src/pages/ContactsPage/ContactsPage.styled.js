import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 20px;
`;

export const TitleContacts = styled.h2`
  font-family: 'Roboto';
  font-size: 70px;
  font-weight: bold;
  color: #e2e2e2;
  text-align: center;
  text-shadow: #120c07 10px 0 5px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ContactsContainer = styled.div`
  width: 100%;
`;

export const NoContacts = styled.p`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: bold;
  color: #120c07;
  text-align: center;
  margin-top: 100px;
`;
