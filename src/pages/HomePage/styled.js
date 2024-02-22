import styled from 'styled-components';

export const HomePageSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ImagePhonebook = styled.img`
  width: 300px;
  height: 200px;

  @media (min-width: 640px) {
    width: 500px;
    height: 300px;
  }

  @media (min-width: 1024px) {
    width: 600px;
    height: 400px;
  }
`;
