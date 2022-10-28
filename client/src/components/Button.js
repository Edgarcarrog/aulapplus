import React from "react";

const Button = ({ children, className, handleClick }) => {
  return (
    <button className={`btn form-control ${className}`} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
