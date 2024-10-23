import React, { useState } from "react";
import "./style.css";
import DropdownInput from "./dropdown-input";
import SelectedCategories from "./selected-categories";
import DropdownList from "./dropdown-list";

const CategoriesDropdown = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [categories, setCategories] = useState([]);
  const dropdownItems = ["Sidewalk Shed", "Scaffold", "Shoring"];

  const handleAddCategory = (category) => {
    if (!categories.includes(category)) {
      setCategories([...categories, category]);
    } else {
      removeCategory(category);
    }
  };

  const removeCategory = (category) => {
    setCategories((prev) => prev.filter((cat) => cat !== category));
  };

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
      <h5>Category Included</h5>
      <DropdownInput
        openDropdown={openDropdown}
        toggleDropdown={() => setOpenDropdown(!openDropdown)}
      />
      <div
        className="selectedCategoriesContainer"
        style={{
          opacity: !openDropdown ? "1" : "0",
          transition: "opacity 0.2s ease-in-out",
        }}
      >
        <SelectedCategories
          categories={categories}
          removeCategory={removeCategory}
          getBackgroundColor={getBackgroundColor}
        />
      </div>

      <DropdownList
        openDropdown={openDropdown}
        items={dropdownItems}
        toggleCategory={handleAddCategory}
        categories={categories}
        getBackgroundColor={getBackgroundColor}
        getTextColor={getTextColor}
      />
    </div>
  );
};

export default CategoriesDropdown;
