import { TitlePhonebook } from 'components/App/TitlePhonebook.styled';
import React from 'react';
import phonebookImage from '../../images/phonebook.png';
import { HomePageSection, ImagePhonebook } from './HomePage.styled';

const HomePage = () => {
  return (
    <HomePageSection>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <ImagePhonebook src={phonebookImage} alt='phonebook' />
    </HomePageSection>
  );
};

export default HomePage;
