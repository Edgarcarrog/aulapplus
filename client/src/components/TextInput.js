import React from "react";

const Input = ({ id, label, htmlFor, type, autoFocus }) => {
  return (
    <div className="mb-2">
      <label htmlFor={htmlFor} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        name={id}
        autoFocus={autoFocus}
        /*  onChange={handleChange} */
      />
    </div>
  );
};

export default Input;
