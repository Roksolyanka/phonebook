import styled from 'styled-components';
import { colors } from 'theme';

export const TitlePhonebook = styled.h1`
  font-family: 'Roboto';
  font-size: 100px;
  font-weight: bold;
  width: 100%;
  color: ${() => colors.secondaryColor};
  text-align: center;
  text-shadow: ${() => colors.textShadowColor} 10px 0 5px;
  margin-bottom: 20px;
  margin-top: 20px;
  box-shadow: ${() => colors.accentColor} 0px 20px 30px,
    ${() => colors.accentColor} 0px 2px 5px;
`;
