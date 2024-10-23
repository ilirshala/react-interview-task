import React, { useState } from "react";
import "./style.css";
import {
  CaretDownOutlined,
  CaretUpOutlined,
  CheckOutlined,
  CloseSquareTwoTone,
} from "@ant-design/icons";

const Dropdown = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [categories, setCategories] = useState([]);

  const handleAddCategory = (category) => {
    if (!categories.includes(category)) {
      setCategories([...categories, category]);
    } else {
      const updatedCategories = categories.filter((cat) => cat !== category);
      setCategories(updatedCategories);
    }
  };

  const handleRemoveCategory = (category) => {
    const updatedCategories = categories.filter((cat) => cat !== category);
    setCategories(updatedCategories);
  };

  const dropdownItems = ["Sidewalk Shed", "Scaffold", "Shoring"];

  const getBackgroundColor = (item) => {
    if (categories.includes("Scaffold") && item === "Scaffold")
      return "#EFD652";
    if (categories.includes("Shoring") && item === "Shoring") return "#9640BE";
    return categories.includes(item) && "#67AA3C";
  };

  const getTextColor = (item) => {
    return categories.includes(item) && "#fff";
  };

  return (
    <div>
      <h5>Dropdown</h5>
      <div
        className="dropdownInput"
        onClick={() => setOpenDropdown(!openDropdown)}
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
      <div
        className="selectedCategories"
        style={{
          opacity: !openDropdown ? "1" : "0",
          transition: " opacity 0.2s ease-in-out",
        }}
      >
        {categories?.map((cat) => (
          <div className="selectedCategory">
            <div
              className="dot"
              style={{ backgroundColor: getBackgroundColor(cat) }}
            />
            <p>{cat}</p>
            <CloseSquareTwoTone
              twoToneColor={"#ff0000"}
              onClick={() => handleRemoveCategory(cat)}
            />
          </div>
        ))}
      </div>

      <div
        className={`dropdownList ${openDropdown ? "show" : ""}`}
        style={{
          maxHeight: openDropdown ? "500px" : "0",
          opacity: openDropdown ? "1" : "0",
          transition: "max-height 0.2s ease-in-out, opacity 0.2s ease-in-out",
        }}
      >
        {dropdownItems.map((item) => (
          <div
            key={item}
            className="dropdownListItem"
            onClick={() => handleAddCategory(item)}
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
    </div>
  );
};

export default Dropdown;
