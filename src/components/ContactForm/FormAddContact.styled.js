import styled from 'styled-components';
import { ButtonUi } from 'ui/ButtonUi.styled';
import { InputUi } from 'ui/InputUi.styled';

export const ContainerForm = styled.div`
  flex: 1;
  margin-top: 100px;
  padding-left: 30px;
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

export const InputStyle = styled(InputUi)`
  width: 100%;
`;

export const WrapperForButton = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

export const ButtonForm = styled(ButtonUi)`
  margin: 0;
`;
