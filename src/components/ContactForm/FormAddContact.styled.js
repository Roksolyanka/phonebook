import styled from 'styled-components';
import { ButtonUi } from 'ui/ButtonUi.styled';

export const ContainerForm = styled.div`
  flex: 1;
  margin: 100px 0 0 0;
  padding: 0 0 0 30px;
  height: 100vh;
`;

export const Form = styled.form`
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.colors.accentColor};
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.colors.accentColor} 5px 0 5px;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondaryColor};
  text-shadow: ${({ theme }) => theme.colors.textShadowColor} 5px 0 1px;
  position: sticky;
  top: 50px;
`;

export const WrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperForButton = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 0 0 0;
`;

export const ButtonForm = styled(ButtonUi)`
  margin: 0;
`;
