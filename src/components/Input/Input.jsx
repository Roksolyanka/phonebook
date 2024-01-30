import React from 'react';
import PropTypes from 'prop-types';

import { ErrorInputMessageUi } from 'ui/ErrorInputMessageUi.styled';
import { Input } from './Input.styled';

export const InputComponent = props => {
  const { label, name, wrapperStyle, formik } = props;
  const Wrapper = wrapperStyle;
  const htmlFor = `input-${name}`;
  return (
    <Wrapper>
      <label htmlFor={htmlFor}>{label}</label>
      <Input id={htmlFor} name={name} {...props} />
      {formik && formik.touched[name] && formik.errors[name] && (
        <ErrorInputMessageUi>{formik.errors[name]}</ErrorInputMessageUi>
      )}
    </Wrapper>
  );
};

InputComponent.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  wrapperStyle: PropTypes.object,
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
