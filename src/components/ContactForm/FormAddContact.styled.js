import styled from 'styled-components';
import { colors } from 'theme';
import { InputUi } from 'ui/InputUi.styled';

export const ContainerForm = styled.div`
  margin-top: 100px;
  padding-left: 30px;
`;

export const Form = styled.form`
  display: grid;
  width: 600px;
  margin: 0 auto;
  border: 2px solid ${() => colors.accentColor};
  border-radius: 4px;
  box-shadow: ${() => colors.accentColor} 5px 0 5px;
  padding-top: 20px;
  font-size: 40px;
  font-weight: bold;

  text-align: center;
  color: ${() => colors.secondaryColor};
  text-shadow: ${() => colors.textShadowColor} 5px 0 1px;
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
