import React from 'react';
import phonebookImage from '../../images/phonebook.png';
import { HomePageSection } from './HomePage.styled';
import { TitlePhonebook } from 'components/App/App.styled';

const HomePage = () => {
  return (
    <HomePageSection>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <img src={phonebookImage} alt="phonebook" width="600" height="400"/>
    </HomePageSection>
  );
};

export default HomePage;
