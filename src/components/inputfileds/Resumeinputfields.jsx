// components/InputField.jsx
import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ label, type, value, onChange, placeholder, isTextarea }) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-blue-700 capitalize">{label}</label>
      {isTextarea ? (
        <textarea
          className="w-full p-3 border border-blue-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          className="w-full p-3 border border-blue-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  isTextarea: PropTypes.bool,
};

InputField.defaultProps = {
  type: 'text',
  placeholder: '',
  isTextarea: false,
};

export default InputField;
