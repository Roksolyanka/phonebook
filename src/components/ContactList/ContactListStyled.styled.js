import styled from 'styled-components';
import { colors } from 'theme';

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
  color: ${() => colors.primaryColor};
  text-align: center;
  text-shadow: ${() => colors.textShadowColor} 2px 0 1px;
  margin: 0 auto 5px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 750px;
  border-radius: 6px;
  padding: 12px 20px;
  border: 1px solid ${() => colors.accentColor};
  box-sizing: border-box;
  box-shadow: 0 2px 8px ${() => colors.boxShadow};

  &: hover {
    box-shadow: ${() => colors.accentColor} 0px 10px 10px 0px;
  }
`;

export const ListPhone = styled.span`
  margin-left: 10px;
  color: ${() => colors.textShadowColor};
`;

export const ButtonDelete = styled.button`
  background-color: ${() => colors.accentColor};
  color: ${() => colors.textShadowColor};
  box-shadow: 5px 5px 2px 0px ${() => colors.textShadowColor};
  font-size: 30px;
  border: none;
  border-radius: 5px;
  width: 50px;
  max-height: auto;
  margin-left: 10px;

  &: hover {
    background-color: ${() => colors.textShadowColor};
    color: ${() => colors.accentColor};
    box-shadow: 5px 5px 2px 0px ${() => colors.accentColor};
  }
`;
