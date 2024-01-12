import React from 'react';
import PropTypes from 'prop-types';

export const InputComponent = ({
  label,
  name,
  type,
  value,
  onChange,
  required,
  minLength,
  autoComplete,
  wrapperStyle,
  inputStyle,
}) => {
  const Wrapper = wrapperStyle;
  const Input = inputStyle;
  return (
    <Wrapper>
      <label>{label}</label>
      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        minLength={minLength}
        autoComplete={autoComplete}
      />
    </Wrapper>
  );
};

InputComponent.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  minLength: PropTypes.number,
  autoComplete: PropTypes.string,
  wrapperStyle: PropTypes.object,
  inputStyle: PropTypes.object,
};
