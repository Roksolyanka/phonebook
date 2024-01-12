import styled from 'styled-components';
import { colors } from 'theme';

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
  font-family: 'Roboto';
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

export const InputStyle = styled.input`
  width: 550px;
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
