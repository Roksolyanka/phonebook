import styled from 'styled-components';
import { ButtonUi } from 'ui/ButtonUi.styled';
import { ModalBackdropUi, ModalBoxUi, ModalTitleUi } from 'ui/ModalUi.styled';

export const ModalDeleteBackdrop = styled(ModalBackdropUi)`
  top: 0;
  height: 100%;
  cursor: pointer;
`;

export const ModalDeleteBox = styled(ModalBoxUi)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: auto;
`;

export const ModalDeleteTitle = styled(ModalTitleUi)`
  overflow: auto;
`;

export const ModalDeleteButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
`;

export const ModalDeleteButton = styled(ButtonUi)`
  margin: 0;
`;
