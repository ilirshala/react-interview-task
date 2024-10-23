import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { Flex } from "antd";
import React from "react";

const DropdownInput = ({
  openDropdown,
  toggleDropdown,
  placeholder,
  isStatusDropdown = false,
}) => {
  const getDotColor = (item) => {
    if (item === "Completed") return "#7AC14D";
    else if (item === "In progress") return "#B3D99B";
    else return "#ECDE7C";
  };
  return (
    <div
      className={`dropdownInput ${
        placeholder !== "Select one" && isStatusDropdown && "selectedStatus"
      }`}
      onClick={toggleDropdown}
      style={{
        borderBottomLeftRadius: openDropdown ? "0" : "5px",
        borderBottomRightRadius: openDropdown ? "0" : "5px",
      }}
    >
      {isStatusDropdown ? (
        <Flex align="center" gap={"small"}>
          <div
            className="dot"
            style={{
              backgroundColor: getDotColor(placeholder),
              height: "10px",
              width: "10px",
              borderRadius: "200px",
              display: placeholder === "Select one" && "none",
            }}
          />
          {placeholder === "Select one" ? (
            <span>{placeholder}</span>
          ) : (
            <p>{placeholder}</p>
          )}
        </Flex>
      ) : (
        <span>{placeholder}</span>
      )}

      {openDropdown ? (
        <CaretUpOutlined className="icon" />
      ) : (
        <CaretDownOutlined className="icon" />
      )}
    </div>
  );
};

export default DropdownInput;
