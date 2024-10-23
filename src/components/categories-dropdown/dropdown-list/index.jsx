import { CheckOutlined } from "@ant-design/icons";
import React from "react";

const DropdownList = ({
  openDropdown,
  items,
  toggleCategory,
  categories,
  getBackgroundColor,
  getTextColor,
}) => (
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
        className="dropdownListItem"
        onClick={() => toggleCategory(item)}
        style={{
          backgroundColor: getBackgroundColor(item),
          color: getTextColor(item),
        }}
      >
        <p>{item}</p>
        {categories.includes(item) && <CheckOutlined />}
      </div>
    ))}
  </div>
);

export default DropdownList;
