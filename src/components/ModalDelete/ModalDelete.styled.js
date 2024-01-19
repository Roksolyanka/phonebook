import styled from 'styled-components';
import { ModalBackdropUi, ModalBoxUi, ModalTitleUi } from 'ui/ModalUi.styled';

export const ModalDeleteBackdrop = styled(ModalBackdropUi)`
  top: 0;
  height: 100%;
  cursor: pointer;
`;

export const ModalDeleteBox = styled(ModalBoxUi)`
  cursor: auto;
`;

export const ModalDeleteTitle = styled(ModalTitleUi)`
  overflow: auto;
`;
