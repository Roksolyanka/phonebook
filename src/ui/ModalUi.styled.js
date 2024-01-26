import styled from 'styled-components';
import { InputUi } from './InputUi.styled';
import { BoxUi } from './BoxUi.styled';

export const ModalBackdropUi = styled(BoxUi)`
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: 80%;
  background-color: ${({ theme }) => theme.colors.backdropColor};
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.is-hidden {
    visibility: hidden;
    opacity: 0;
  }
`;

export const ModalBoxUi = styled.div`
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
`;

export const ModalTitleUi = styled.h1`
  font-size: 25px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textShadowColor};
`;

export const ModalFormUi = styled.form`
  text-align: center;
`;

export const ModalSecondWrapperUi = styled.div`
  display: grid;
  color: ${({ theme }) => theme.colors.textShadowColor};
  font-size: 20px;
  margin: 0 0 5px 0;
`;

export const ModalInputUi = styled(InputUi)`
  width: 100%;
`;
