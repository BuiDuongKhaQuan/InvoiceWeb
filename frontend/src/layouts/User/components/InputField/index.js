import React from "react";

const InputField = ({
  label,
  type,
  name,
  value,
  onChange,
  required,
  placeholder,
  icon,
}) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <div class="input-group mb-3">
        <input
          className="form-control shadow-none"
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />
        {icon && (
          <button class="input-group-text bg-info text-white">
            <i class="bi bi-search"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
