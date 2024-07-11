import React from "react";
import "./styles.css";
const Button = ({ type, text, onClick, customBtn }) => {
  return (
    <button
      type={type}
      className={`btn btn-primary btn-block ${customBtn}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
