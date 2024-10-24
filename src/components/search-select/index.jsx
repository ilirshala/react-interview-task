import { Select } from "antd";
import React from "react";
import "./style.css";
import { renderError } from "../../utils/inputValidation";

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
        variant="filled"
      />
      {renderError(errors)}
    </div>
  );
};

export default SearchSelect;
