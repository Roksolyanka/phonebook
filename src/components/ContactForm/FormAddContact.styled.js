import styled from 'styled-components';
import { InputUi } from 'ui/InputUi.styled';

export const ContainerForm = styled.div`
  margin-top: 100px;
  padding-left: 30px;
  min-height: 500px;
`;

export const Form = styled.form`
  display: grid;
  gap: 10px;
  width: 600px;
  margin: 0 auto;
  border: 2px solid ${({ theme }) => theme.colors.accentColor};
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.colors.accentColor} 5px 0 5px;
  padding-top: 20px;
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
  gap: 10px;
`;

export const InputStyle = styled(InputUi)`
  width: 550px;
`;

export const WrapperForButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
