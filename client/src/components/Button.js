import React from "react";

const Button = ({ children, className, handleSubmit }) => {
  return (
    <button className={`btn form-control ${className}`} onClick={handleSubmit}>
      {children}
    </button>
  );
};

export default Button;
