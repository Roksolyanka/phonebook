import styled from 'styled-components';

export const ContactsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
  list-style: none;
  padding-inline-start: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.laptop}) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
