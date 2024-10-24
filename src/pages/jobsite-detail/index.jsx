import { Card, Flex, Table } from "antd";
import React, { useEffect, useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ActionButton from "../../components/action-button";
import noService from "../../assets/noService.png";
import { getCategories } from "../../store/actions/categories.action";
import TableActions from "../../components/jobsites-table/table-actions";
import { categoriesTableColumns } from "../../utils/tablesColumns";
import AddCategoryModal from "../../components/modals/add-category-modal";
import { toggleAddCategoryModal } from "../../store/actions/modals.action";

const JobsiteDetail = () => {
  const dispatch = useDispatch();
  const { jobsiteId } = useParams();
  const { jobsites } = useSelector((state) => state.jobsites);
  const { categories } = useSelector((state) => state.categories);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const filterCategoriesByCategory = categories?.filter(
    (category) => category?.category === selectedCategory
  );
  const selectedJobsite = jobsites?.find(
    (jobsite) => jobsite?.id === jobsiteId
  );

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    dispatch(getCategories(jobsiteId));
  }, [dispatch, jobsiteId]);

  return (
    <>
      <AddCategoryModal />
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
          {selectedCategory === null ? (
            <div className="detailsTableNoService">
              <img src={noService} alt="" />
              <h4>No Service Selected</h4>
              <p>Please select a service on your left to proceed.</p>
            </div>
          ) : (
            <>
              <TableActions
                title={selectedCategory}
                onClickAddButton={() =>
                  dispatch(
                    toggleAddCategoryModal({
                      jobsiteId: jobsiteId,
                      category: selectedCategory,
                    })
                  )
                }
              />
              <Table
                columns={categoriesTableColumns}
                dataSource={filterCategoriesByCategory}
              />
            </>
          )}
        </Card>
      </Flex>
    </>
  );
};

export default JobsiteDetail;