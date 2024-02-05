import styled from 'styled-components';
import { InputUi } from 'ui/InputUi.styled';

export const FilterStyled = styled.label`
  display: block;
  font-size: 40px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryColor};
  text-align: center;
  text-shadow: ${({ theme }) => theme.colors.textShadowColor} 2px 0 0;
  margin: 10px 0 30px 0;
`;

export const InputFind = styled(InputUi)`
  width: 320px;
  margin: 0 0 0 10px;
  vertical-align: top;
`;
