import React, { useState } from 'react';
import PropTypes from 'prop-types';

import sprite from '../../assets/sprite.svg';
import { ErrorInputMessageUi } from 'ui/ErrorInputMessageUi.styled';
import { Input, PlaceholderText, Text, Visibility, Wrapper } from './styled';

export const InputComponent = props => {
  const { label, name, formik } = props;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const inputType = isPasswordVisible ? 'text' : 'password';
  const iconType = isPasswordVisible ? '' : '-blocked';
  const htmlFor = `input-${name}`;

  return (
    <Wrapper>
      <Input id={htmlFor} name={name} type={inputType} {...props} />
      <PlaceholderText htmlFor={htmlFor}>
        <Text>{label}</Text>
      </PlaceholderText>
      {name === 'password' && (
        <Visibility onClick={togglePasswordVisibility}>
          <svg>
            <use href={`${sprite}#icon-eye${iconType}`}></use>
          </svg>
        </Visibility>
      )}
      {formik && formik.touched[name] && formik.errors[name] && (
        <ErrorInputMessageUi>{formik.errors[name]}</ErrorInputMessageUi>
      )}
    </Wrapper>
  );
};

InputComponent.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  formik: PropTypes.shape({
    values: PropTypes.object,
    errors: PropTypes.object,
    touched: PropTypes.object,
    handleChange: PropTypes.func,
    handleBlur: PropTypes.func,
    handleSubmit: PropTypes.func,
    isSubmitting: PropTypes.bool,
  }),
};
