import { getCurrentYear } from 'helpers/helper';

import { Creator, FooterStyle } from './styled';

export const Footer = () => {
  const currentYear = getCurrentYear();

  return (
    <FooterStyle>
      <span>© {currentYear} Created by </span>
      <Creator
        href="https://github.com/Roksolyanka"
        target="_blank"
        rel="noopener noreferrer"
      >
        Roksolana Kushnir
      </Creator>
    </FooterStyle>
  );
};
