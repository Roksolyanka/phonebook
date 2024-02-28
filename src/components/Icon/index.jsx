import React from 'react';
import PropTypes from 'prop-types';

import sprite from '../../assets/sprite.svg';

export const Icon = ({ name, width, height }) => (
  <svg width={width} height={height}>
    <use href={`${sprite}#${name}`} />
  </svg>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};
