import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'components/Icon';

import { ErrorInputMessageUi } from 'ui/ErrorInputMessageUi.styled';
import { Input, PlaceholderText, Text, Visibility, Wrapper } from './styled';

export const InputComponent = props => {
  const { label, name, formik, autocomplete } = props;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const inputType = isPasswordVisible ? 'text' : 'password';
  const iconType = isPasswordVisible ? '' : '-blocked';
  const htmlFor = `input-${name}`;

  return (
    <Wrapper>
      <Input
        id={htmlFor}
        name={name}
        type={inputType}
        autoComplete={autocomplete}
        {...props}
      />
      <PlaceholderText htmlFor={htmlFor}>
        <Text>{label}</Text>
      </PlaceholderText>
      {name === 'password' && (
        <Visibility onClick={togglePasswordVisibility}>
          <Icon name={`icon-eye${iconType}`} width="15px" height="15px" />
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
  autocomplete: PropTypes.string,
};
