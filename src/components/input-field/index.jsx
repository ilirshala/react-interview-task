import { Input } from "antd";
import React from "react";
import "./style.css";

const InputField = ({ label, placeholder, value, onchange }) => {
  return (
    <div className="inputField">
      <h5>{label}</h5>
      <Input
        placeholder={placeholder}
        variant="filled"
        value={value}
        onChange={onchange}
      />
    </div>
  );
};

export default InputField;
