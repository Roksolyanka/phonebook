import styled from 'styled-components';

export const ContainerForm = styled.div`
  flex: 1;
  height: 100vh;
  margin-top: 100px;
  padding-left: 30px;
`;

export const Form = styled.form`
  position: sticky;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  padding: 20px;
  top: 50px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.secondaryColor};
  border: 2px solid ${({ theme }) => theme.colors.accentColor};
  box-shadow: ${({ theme }) => theme.colors.accentColor} 5px 0 5px;
`;

export const WrapperForButton = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;
