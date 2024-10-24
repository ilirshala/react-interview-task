import { Select } from "antd";
import React from "react";
import "./style.css";

const SearchSelect = ({
  label,
  options,
  errors,
  style,
  containerStyle,
  value,
  onChange,
}) => {
  return (
    <div className="searchSelect" style={containerStyle}>
      {label && <h5 className="inputField-label">{label}</h5>}
      <Select
        showSearch
        style={style}
        placeholder="Search to Select"
        optionFilterProp="label"
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        options={options}
        value={value}
        onChange={onChange}
      />
      {errors && <span className="error-text">{errors}</span>}
    </div>
  );
};

export default SearchSelect;
