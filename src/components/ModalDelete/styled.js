import styled from 'styled-components';
import { ModalBackdropUi, ModalTitleUi } from 'ui/ModalUi.styled';

export const ModalDeleteBackdrop = styled(ModalBackdropUi)`
  top: 0;
  height: 100%;
  cursor: pointer;
`;

export const ModalDeleteBox = styled.dialog`
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: auto;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  box-shadow: 1px 1px 14px 4px ${({ theme }) => theme.colors.accentColor};
  border-radius: 16px;
  max-width: 400px;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  animation-name: modalopen;
  animation-duration: 1.75s;
`;

export const ModalDeleteTitle = styled(ModalTitleUi)`
  overflow: hidden;
  word-break: break-all;
  margin: 0;
`;

export const ModalDeleteButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
`;
