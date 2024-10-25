import { CloseSquareTwoTone } from "@ant-design/icons";
import React from "react";
import "./style.css";
import { getBackgroundColor, removeCategory } from "../../../utils/utils";
const SelectedCategories = ({ categories, setCategories }) => (
  <div className="selectedCategories">
    {categories.map((cat) => (
      <div className="selectedCategory" key={cat}>
        <div
          className="dot"
          style={{ backgroundColor: getBackgroundColor(cat, categories) }}
        />
        <p>{cat}</p>
        <CloseSquareTwoTone
          twoToneColor={"#ff0000"}
          onClick={() => removeCategory(cat, setCategories)}
        />
      </div>
    ))}
  </div>
);

export default SelectedCategories;
