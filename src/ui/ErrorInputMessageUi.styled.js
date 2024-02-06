import styled from 'styled-components';

export const ErrorInputMessageUi = styled.p`
  color: ${({ theme }) => theme.colors.errorColor};
  font-size: 14px;
  line-height: 1.17;
  margin: 0;
  text-shadow: none;
  position: absolute;
  top: 110%;
  left: 0;
  right: 0;
  transition: opacity 0.15s ease-out;
`;
