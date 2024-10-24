import { Input, InputNumber } from "antd";
import React from "react";
import "./style.css";

const InputField = ({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  style,
  containerStyle,
  errors,
}) => {
  const renderInput = () => {
    switch (type) {
      case "number":
        return (
          <InputNumber
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            style={style}
          />
        );
      case "textarea":
        return (
          <Input.TextArea
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            rows={4}
            style={style}
          />
        );
      default:
        return (
          <Input
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            style={style}
          />
        );
    }
  };

  return (
    <div className="inputField" style={containerStyle}>
      {label && <h5 className="inputField-label">{label}</h5>}
      {renderInput()}
      {errors && <span className="error-text">{errors}</span>}
    </div>
  );
};

export default InputField;
