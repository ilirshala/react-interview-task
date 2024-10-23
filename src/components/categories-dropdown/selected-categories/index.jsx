import { CloseSquareTwoTone } from "@ant-design/icons";
import React from "react";
import "./style.css";
const SelectedCategories = ({
  categories,
  removeCategory,
  getBackgroundColor,
}) => (
  <div className="selectedCategories">
    {categories.map((cat) => (
      <div className="selectedCategory" key={cat}>
        <div
          className="dot"
          style={{ backgroundColor: getBackgroundColor(cat) }}
        />
        <p>{cat}</p>
        <CloseSquareTwoTone
          twoToneColor={"#ff0000"}
          onClick={() => removeCategory(cat)}
        />
      </div>
    ))}
  </div>
);

export default SelectedCategories;
