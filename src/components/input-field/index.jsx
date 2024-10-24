import { Input, InputNumber } from "antd";
import React from "react";

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
            variant="filled"
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
            variant="filled"
          />
        );
      default:
        return (
          <Input
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            style={style}
            variant="filled"
          />
        );
    }
  };

  return (
    <div className="inputField" style={containerStyle}>
      {label && <h5 style={{ marginBottom: "5px" }}>{label}</h5>}
      {renderInput()}
      {errors && <span className="error-text">{errors}</span>}
    </div>
  );
};

export default InputField;
