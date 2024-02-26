import styled from 'styled-components';

export const ContainerForm = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  border-radius: 16px;
  max-width: 400px;
  width: 100%;
  box-sizing: border-box;
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
    padding: 20px 20px 20px 30px;
  }
`;

export const Form = styled.form`
  position: sticky;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  padding: 20px 0;
  top: 50px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.secondaryColor};

  @media (min-width: 1024px) {
    border: 2px solid ${({ theme }) => theme.colors.accentColor};
    box-shadow: ${({ theme }) => theme.colors.accentColor} 5px 0 5px;
    padding: 20px;
  }
`;

export const WrapperForButton = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;
