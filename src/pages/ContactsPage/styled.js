import styled from 'styled-components';
import { ButtonUi } from 'ui/ButtonUi.styled';
import { ModalBackdropUi } from 'ui/ModalUi.styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: flex-start;
  text-align: center;
  gap: 10px;
`;

export const TitleContacts = styled.h2`
  font-size: 25px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondaryColor};
  text-align: center;
  text-shadow: ${({ theme }) => theme.colors.textShadowColor} 10px 0 5px;
  margin: 10px 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.tablet}) {
    font-size: 35px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.laptop}) {
    font-size: 50px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.desktop}) {
    font-size: 70px;
  }
`;

export const NewContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryColor};
  text-align: center;
  text-shadow: ${({ theme }) => theme.colors.textShadowColor} 2px 0 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.tablet}) {
    font-size: 20px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.laptop}) {
    display: none;
  }
`;

export const ModalBackdrop = styled(ModalBackdropUi)`
  top: 0;
  height: 100%;
`;

export const ButtonAddContact = styled(ButtonUi)`
  font-size: 0;
  padding: 10px;
  margin: 0;
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
  margin-top: 100px;
`;
