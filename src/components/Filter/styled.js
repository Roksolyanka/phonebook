import styled from 'styled-components';
import { InputUi } from 'ui/InputUi.styled';

export const FilterStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryColor};
  text-align: center;
  text-shadow: ${({ theme }) => theme.colors.textShadowColor} 2px 0 0;
  margin: 10px 0 30px 0;

  @media (min-width: 640px) {
    font-size: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 30px;
  }

  @media (min-width: 1200px) {
    font-size: 40px;
  }
`;

export const InputFind = styled(InputUi)`
  max-width: 320px;
  margin-left: 10px;
  vertical-align: top;
`;
