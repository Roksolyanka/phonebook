import React from 'react';
import PropTypes from 'prop-types';
import { FilterStyled } from './FilterStyled.styled';
import { InputFind } from './InputFind.styled';

export const Filter = ({ value, onChange }) => (
  <FilterStyled>
    Find contacts by name:
    <InputFind type="text" value={value} onChange={onChange} />
  </FilterStyled>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
