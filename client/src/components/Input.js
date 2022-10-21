import React from "react";

const Input = ({
  id,
  className,
  label,
  htmlFor,
  type,
  autoFocus,
  required,
  value,
  handleChange,
}) => {
  return (
    <div className="mb-2">
      <label htmlFor={htmlFor} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className={`form-control ${className}`}
        id={id}
        name={id}
        value={value}
        required={required}
        autoFocus={autoFocus}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
