import styled from 'styled-components';
import { ButtonUi } from 'ui/ButtonUi.styled';

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: start;
  font-size: 18px;
  font-weight: bold;
  list-style: none;
  width: 100%;
  box-sizing: border-box;
  padding: 12px 20px;
  margin: 0 auto 5px;
  box-sizing: border-box;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.primaryColor};
  border: 1px solid ${({ theme }) => theme.colors.accentColor};
  box-shadow: 0 2px 8px ${({ theme }) => theme.colors.boxShadow};

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: start;
`;

export const ListName = styled.span`
  overflow: hidden;
  word-break: break-all;
`;

export const ListPhone = styled.span`
  overflow: hidden;
  word-break: break-all;
  color: ${({ theme }) => theme.colors.textShadowColor};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const Icon = styled.svg`
  width: ${({ width }) => width || '15px'};
  height: ${({ height }) => height || '15px'};
`;

export const Button = styled(ButtonUi)`
  border-radius: 5px;
  padding: 2px 10px;
  margin: 10px 0;
`;
