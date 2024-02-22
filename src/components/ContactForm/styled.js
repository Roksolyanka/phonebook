import styled from 'styled-components';

export const ContainerForm = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  box-shadow: 1px 1px 14px 4px ${({ theme }) => theme.colors.accentColor};
  border-radius: 16px;
  max-width: 400px;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  animation-name: modalopen;
  animation-duration: 1.75s;
  @keyframes modalopen {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @media (min-width: 1024px) {
    display: block;
    flex: 1;
    height: 100vh;
    margin-top: 100px;
    padding-left: 30px;
    box-shadow: none;
  }
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

  @media (min-width: 1024px) {
    border: 2px solid ${({ theme }) => theme.colors.accentColor};
    box-shadow: ${({ theme }) => theme.colors.accentColor} 5px 0 5px;
  }
`;

export const WrapperForButton = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;
