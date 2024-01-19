import styled from 'styled-components';
import { BoxUi } from 'ui/BoxUi.styled';
import { ButtonUi } from 'ui/ButtonUi.styled';

export const ContactsList = styled.ul`
  display: flex;
  list-style: none;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: start;
  font-size: 30px;
  font-weight: bold;
  list-style: none;
  width: 600px;
  padding: 12px 20px;
  margin: 0 auto 5px;
  box-sizing: border-box;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.primaryColor};
  text-shadow: ${({ theme }) => theme.colors.textShadowColor} 2px 0 1px;
  border: 1px solid ${({ theme }) => theme.colors.accentColor};
  box-shadow: 0 2px 8px ${({ theme }) => theme.colors.boxShadow};

  &: hover {
    box-shadow: ${({ theme }) => theme.colors.accentColor} 0px 10px 10px 0px;
  }
`;

export const ContactWrapper = styled(BoxUi)`
  flex-direction: column;
  align-items: start;
`;

export const ListPhone = styled.span`
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.textShadowColor};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
`;

export const Icon = styled.svg`
  width: 18px;
  height: 18px;
`;

export const Button = styled(ButtonUi)`
  font-size: 30px;
  border-radius: 5px;
  padding: 0;
  width: 50px;
  margin: 10px 0;
`;
