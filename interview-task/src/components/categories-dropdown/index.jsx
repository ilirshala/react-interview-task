import React, { useState } from "react";
import "./style.css";
import DropdownInput from "../dropdown-input";
import SelectedCategories from "./selected-categories";
import DropdownList from "../dropdown-list";
import { removeCategory } from "../../utils/utils";

const CategoriesDropdown = ({ categories, setCategories }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownItems = ["Sidewalk Shed", "Scaffold", "Shoring"];

  const handleAddCategory = (category) => {
    if (!categories.includes(category)) {
      setCategories([...categories, category]);
    } else {
      removeCategory(category, setCategories);
    }
  };

  return (
    <div>
      <h5>Category Included</h5>
      <DropdownInput
        openDropdown={openDropdown}
        toggleDropdown={() => setOpenDropdown(!openDropdown)}
        placeholder={"Select"}
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
          setCategories={setCategories}
        />
      </div>

      <DropdownList
        openDropdown={openDropdown}
        items={dropdownItems}
        toggleCategory={handleAddCategory}
        categories={categories}
        isInStatus={false}
      />
    </div>
  );
};

export default CategoriesDropdown;
