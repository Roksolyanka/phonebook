import styled from 'styled-components';
import { colors } from 'theme';

export const ButtonUi = styled.button`
  background-color: ${() => colors.accentColor};
  color: ${() => colors.textShadowColor};
  box-shadow: 5px 5px 2px 0px ${() => colors.textShadowColor};
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 25px;
  border: none;
  border-radius: 10px;
  padding: 15px;
  max-height: auto;
  max-width: 200px;
  margin: 20px auto;

  &: hover {
    outline-color: transparent;
    outline-style: solid;
    box-shadow: 10px 10px 5px 0px ${() => colors.textShadowColor};
    transition: 0.3s;
    border: 1px solid ${() => colors.textShadowColor};
  }
`;
