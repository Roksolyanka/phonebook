import styled from 'styled-components';
import { colors } from 'theme';

export const FilterStyled = styled.label`
  display: block;
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: bold;
  color: ${() => colors.primaryColor};
  text-align: center;
  text-shadow: ${() => colors.textShadowColor} 2px 0 0;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const InputFind = styled.input`
  width: 320px;
  height: 40px;
  margin-left: 10px;
  vertical-align: top;
  font-size: 20px;
  font-weight: bold;
  background-color: ${() => colors.secondaryColor};

  
  &: hover, focus {
    box-shadow: ${() => colors.accentColor} 0px 10px 20px,
      ${() => colors.accentColor} 0px 2px 5px;
  }
`;
