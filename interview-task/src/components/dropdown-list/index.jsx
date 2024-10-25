import { CheckOutlined } from "@ant-design/icons";
import React from "react";
import "./style.css";
import { getBackgroundColor } from "../../utils/utils";

const DropdownList = ({
  openDropdown,
  items,
  toggleCategory,
  categories,

  isInStatus,
  onClickStatus,
}) => {
  const getTextColor = (item) => {
    return categories.includes(item) && "#fff";
  };
  return (
    <div
      className={`dropdownList ${openDropdown ? "show" : ""}`}
      style={{
        maxHeight: openDropdown ? "500px" : "0",
        opacity: openDropdown ? "1" : "0",
        transition: "max-height 0.2s ease-in-out, opacity 0.2s ease-in-out",
      }}
    >
      {items.map((item) => (
        <div
          key={item}
          className={`dropdownListItem ${isInStatus ? "statusItem" : ""} `}
          onClick={
            isInStatus ? () => onClickStatus(item) : () => toggleCategory(item)
          }
          style={{
            backgroundColor:
              !isInStatus && getBackgroundColor(item, categories),
            color: !isInStatus && getTextColor(item),
          }}
        >
          <p>{item?.label || item}</p>
          {!isInStatus && categories.includes(item?.label || item) && (
            <CheckOutlined />
          )}
        </div>
      ))}
    </div>
  );
};

export default DropdownList;
