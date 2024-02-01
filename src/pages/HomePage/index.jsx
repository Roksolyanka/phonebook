import React from 'react';

import phonebookImage from '../../assets/images/phonebook.png';

import { HomePageSection } from './styled';
import { TitlePhonebook } from 'components/App/App.styled';

const HomePage = () => {
  return (
    <HomePageSection>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <img src={phonebookImage} alt="phonebook" width="600" height="400" />
    </HomePageSection>
  );
};

export default HomePage;
