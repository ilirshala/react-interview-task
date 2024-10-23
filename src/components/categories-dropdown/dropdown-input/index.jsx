import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import React from "react";

const DropdownInput = ({ openDropdown, toggleDropdown }) => (
  <div
    className="dropdownInput"
    onClick={toggleDropdown}
    style={{
      borderBottomLeftRadius: openDropdown ? "0" : "5px",
      borderBottomRightRadius: openDropdown ? "0" : "5px",
    }}
  >
    <span>Select</span>
    {openDropdown ? (
      <CaretUpOutlined className="icon" />
    ) : (
      <CaretDownOutlined className="icon" />
    )}
  </div>
);

export default DropdownInput;
