import { Card, Flex } from "antd";
import React, { useEffect, useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ActionButton from "../../components/action-button";
import noService from "../../assets/noService.png";

const JobsiteDetail = () => {
  const { jobsiteId } = useParams();
  const { jobsites } = useSelector((state) => state.jobsites);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const selectedJobsite = jobsites?.find(
    (jobsite) => jobsite?.id === jobsiteId
  );

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Flex gap={"middle"} className="jobDetails">
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
            >
              {cat}
            </li>
          ))}
        </ul>
        <div className="buttonContainer">
          <ActionButton type="back" />
        </div>
      </Card>
      <Card bordered={false} className="detailsTable">
        <div className="categoriesListHeader">
          <h3>Data Grid</h3>
        </div>
        {selectedCategory === null && (
          <div className="detailsTableNoService">
            <img src={noService} alt="" />
            <h4>No Service Selected</h4>
            <p>Please select a service on your left to proceed.</p>
          </div>
        )}
      </Card>
    </Flex>
  );
};

export default JobsiteDetail;
