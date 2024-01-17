import styled from 'styled-components';
import { ButtonUi } from 'ui/ButtonUi.styled';

export const ContactsList = styled.ul`
  display: flex;
  list-style: none;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const ContactItem = styled.li`
  font-size: 35px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryColor};
  text-align: center;
  text-shadow: ${({ theme }) => theme.colors.textShadowColor} 2px 0 1px;
  margin: 0 auto 5px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 750px;
  border-radius: 6px;
  padding: 12px 20px;
  border: 1px solid ${({ theme }) => theme.colors.accentColor};
  box-sizing: border-box;
  box-shadow: 0 2px 8px ${({ theme }) => theme.colors.boxShadow};

  &: hover {
    box-shadow: ${({ theme }) => theme.colors.accentColor} 0px 10px 10px 0px;
  }
`;

export const ListPhone = styled.span`
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.textShadowColor};
`;

export const ButtonDelete = styled(ButtonUi)`
  font-size: 30px;
  border-radius: 5px;
  padding: 0;
  width: 50px;
  margin: 10px 0;
`;
