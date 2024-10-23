import React from "react";

const DropdownList = ({ openDropdown, items, onClickStatus, statuses }) => (
  <div
    className={`dropdownList ${openDropdown ? "show" : ""}`}
    style={{
      maxHeight: openDropdown ? "500px" : "0",
      opacity: openDropdown ? "1" : "0",
      transition: "max-height 0.2s ease-in-out, opacity 0.2s ease-in-out",
    }}
  >
    {items?.map((item) => (
      <div
        key={item}
        className="dropdownListItem"
        onClick={() => onClickStatus(item)}
      >
        <p>{item}</p>
      </div>
    ))}
  </div>
);

export default DropdownList;
