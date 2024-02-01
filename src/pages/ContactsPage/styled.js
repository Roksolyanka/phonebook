import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: flex-start;
  text-align: center;
  gap: 10px;
`;

export const TitleContacts = styled.h2`
  font-size: 70px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondaryColor};
  text-align: center;
  text-shadow: ${({ theme }) => theme.colors.textShadowColor} 10px 0 5px;
  margin: 10px 0;
`;

export const ContactsContainer = styled.div`
  flex: 2;
  padding: 0 10px;
`;

export const NoContacts = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textShadowColor};
  text-align: center;
  margin: 100px 0 0 0;
`;
