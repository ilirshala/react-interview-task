import { Card, Flex, Table } from "antd";
import React, { useEffect, useState, useMemo } from "react";
import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ActionButton from "../../components/action-button";
import noService from "../../assets/noService.png";
import { getCategories } from "../../store/actions/categories.action";
import TableActions from "../../components/jobsites-table/table-actions";
import { categoriesTableColumns } from "../../utils/tablesColumns";
import CategoryModal from "../../components/modals/category-modal";
import { toggleCategoryModal } from "../../store/actions/modals.action";
import { useSearch } from "../../hooks/useSearch";

const JobsiteDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { jobsiteId } = useParams();
  const { jobsites } = useSelector((state) => state.jobsites);
  const { categories } = useSelector((state) => state.categories);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const selectedJobsite = useMemo(() => {
    return jobsites?.find((jobsite) => jobsite?.id === jobsiteId);
  }, [jobsites, jobsiteId]);

  const filterCategoriesByCategory = useMemo(() => {
    return categories?.filter(
      (category) => category?.category === selectedCategory
    );
  }, [categories, selectedCategory]);

  const { filteredItems } = useSearch(
    searchQuery,
    filterCategoriesByCategory || []
  );

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    dispatch(getCategories(jobsiteId));
  }, [dispatch, jobsiteId]);

  return (
    <>
      <CategoryModal />
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
            <ActionButton type="back" onClickBack={() => navigate("/")} />
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
                    toggleCategoryModal({
                      jobsiteId: jobsiteId,
                      category: selectedCategory,
                      isEditCategory: false,
                      categoryToUpdate: null,
                    })
                  )
                }
                searchValue={searchQuery}
                onChangeSearch={(e) => setSearchQuery(e.target.value)}
                placeholder={"Search category"}
              />
              <Table
                columns={categoriesTableColumns}
                dataSource={filteredItems}
              />
            </>
          )}
        </Card>
      </Flex>
    </>
  );
};

export default JobsiteDetail;
