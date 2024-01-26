import React from 'react';
import PropTypes from 'prop-types';
import { ErrorInputMessageUi } from 'ui/ErrorInputMessageUi.styled';

export const InputComponent = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  required,
  autoComplete,
  wrapperStyle,
  inputStyle,
  className,
  formik,
}) => {
  const Wrapper = wrapperStyle;
  const Input = inputStyle;
  const htmlFor = `input-${name}`;
  return (
    <Wrapper>
      <label htmlFor={htmlFor}>{label}</label>
      <Input
        id={htmlFor}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        autoComplete={autoComplete}
        className={className}
      />
      {formik && formik.touched[name] && formik.errors[name] && (
        <ErrorInputMessageUi>{formik.errors[name]}</ErrorInputMessageUi>
      )}
    </Wrapper>
  );
};

InputComponent.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  required: PropTypes.bool,
  autoComplete: PropTypes.string,
  wrapperStyle: PropTypes.object,
  inputStyle: PropTypes.object,
  className: PropTypes.string,
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
