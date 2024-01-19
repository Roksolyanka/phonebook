import styled from 'styled-components';
import { InputUi } from 'ui/InputUi.styled';

export const ContainerForm = styled.div`
  margin-top: 100px;
  padding-left: 30px;
  height: 100vh;
`;

export const Form = styled.form`
  max-width: 400px;
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

export const InputStyle = styled(InputUi)`
  width: 350px;
`;

export const WrapperForButton = styled.div`
  display: flex;
  justify-content: center;
`;
