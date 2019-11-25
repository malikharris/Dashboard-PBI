import React from 'react';
import PropTypes from 'prop-types';
import './FormField.css';

const FormField = props => {
  // will need an onChange and onSubmit handler functions, probably
  const { header, value, placeholder, onChange, type } = props;
  return (
    <div className="formField">
      <div className="formFieldHeader">{header || 'Email'}</div>
      <input
        onChange={onChange}
        className="formFieldPlaceholderInput"
        type={type}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

FormField.propTypes = {
  header: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

FormField.defaultProps = {
  type: 'text',
};

export default FormField;
