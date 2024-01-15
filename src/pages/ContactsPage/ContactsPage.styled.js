import styled from 'styled-components';
import { colors } from 'theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 20px;
`;

export const TitleContacts = styled.h2`
  font-size: 70px;
  font-weight: bold;
  color: ${() => colors.secondaryColor};
  text-align: center;
  text-shadow: ${() => colors.textShadowColor} 10px 0 5px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ContactsContainer = styled.div`
  width: 100%;
`;

export const NoContacts = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: ${() => colors.textShadowColor};
  text-align: center;
  margin-top: 100px;
`;
