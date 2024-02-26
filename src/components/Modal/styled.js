import styled from 'styled-components';

export const Dialog = styled.dialog`
  max-width: 400px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 16px;
  padding: 20px;
  animation-name: modalopen;
  animation-duration: 1s;
  cursor: auto;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  box-shadow: 1px 1px 14px 4px ${({ theme }) => theme.colors.accentColor};

  &::backdrop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.backdropColor};
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
      visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;

    &.is-hidden {
      visibility: hidden;
      opacity: 0;
    }
  }
`;
