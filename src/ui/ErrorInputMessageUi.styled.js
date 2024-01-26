import styled from 'styled-components';

export const ErrorInputMessageUi = styled.p`
  color: ${({ theme }) => theme.colors.errorColor};
  font-family: Roboto;
  font-size: 14px;
  //   font-weight: 400;
  line-height: 1.17;
  margin: 0;
  text-shadow: none;
`;
