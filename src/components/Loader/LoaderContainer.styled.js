import styled from 'styled-components';

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  position: fixed;
  top: 0;
  left: 0;

  background: radial-gradient(
    circle,
    rgba(255, 231, 36, 0.3982843137254902) 1%,
    rgba(18, 12, 7, 0.6671918767507004) 100%
  );

  z-index: 1000;
`;
