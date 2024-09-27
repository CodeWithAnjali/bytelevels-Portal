import React from 'react';
import PropTypes from 'prop-types';

const FormFields = ({ fields, values, onChange, errors }) => {
  const handleChange = (field, value) => {
    onChange(field, value);
  };

  return (
    <>
      {fields.map((field) => (
        <div key={field} className="mb-4">
          <label 
            htmlFor={field} 
            className="block text-gray-700 font-semibold mb-2 capitalize"
          >
            {field}
          </label>
          {field === 'message' ? (
            <textarea
              id={field}
              name={field}
              className={`w-full border border-gray-300 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 ${errors[field] ? 'border-red-500' : ''}`}
              rows="6"
              placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
              value={values[field]}
              onChange={(e) => handleChange(field, e.target.value)}
              required
            ></textarea>
          ) : (
            <input
              type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
              id={field}
              name={field}
              className={`w-full border border-gray-300 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 ${errors[field] ? 'border-red-500' : ''}`}
              placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
              value={values[field]}
              onChange={(e) => handleChange(field, e.target.value)}
              required
            />
          )}
          {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
        </div>
      ))}
    </>
  );
};

FormFields.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
  values: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default FormFields;
