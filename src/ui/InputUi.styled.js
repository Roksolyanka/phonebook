import styled from 'styled-components';
import { colors } from 'theme';

export const InputUi = styled.input`
  height: 25px;
  margin: 0 auto;
  font-size: 20px;
  font-weight: bold;
  background-color: ${() => colors.secondaryColor};

  &: hover {
    box-shadow: ${() => colors.accentColor} 0px 5px 10px,
      ${() => colors.accentColor} 0px 2px 5px;
  }
`;
