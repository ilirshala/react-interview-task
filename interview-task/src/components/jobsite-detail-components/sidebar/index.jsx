import { Card } from "antd";
import React from "react";
import ActionButton from "../../action-button";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { getBackgroundColor } from "../../../utils/utils";
const Sidebar = ({
  selectedJobsite,
  selectedCategory,
  handleCategoryClick,
}) => {
  const navigate = useNavigate();
  return (
    <Card bordered={false} className="categoriesList">
      <div className="categoriesListHeader">
        <h3>{selectedJobsite?.jobsitename}</h3>
      </div>
      <ul>
        {selectedJobsite?.categories?.map((cat) => (
          <li
            key={cat}
            className={selectedCategory === cat ? "selectedCategory" : ""}
            onClick={() => handleCategoryClick(cat)}
            style={{
              background:
                selectedCategory === cat
                  ? getBackgroundColor(cat, selectedJobsite?.categories)
                  : "",
            }}
          >
            {cat}
          </li>
        ))}
      </ul>
      <div className="buttonContainer">
        <ActionButton type="back" onClickBack={() => navigate("/")} />
      </div>
    </Card>
  );
};

export default Sidebar;
