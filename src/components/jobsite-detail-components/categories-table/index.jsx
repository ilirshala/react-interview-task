import { Card, Table } from "antd";
import React, { useMemo, useState } from "react";
import noService from "../../../assets/noService.png";
import TableActions from "../../table-actions";
import { useDispatch, useSelector } from "react-redux";
import { toggleCategoryModal } from "../../../store/actions/modals.action";
import { useParams } from "react-router-dom";
import { categoriesTableColumns } from "../../../utils/tablesColumns";
import { useSearch } from "../../../hooks/useSearch";
import "./style.css";

const CategoriesTable = ({ selectedCategory }) => {
  const { jobsiteId } = useParams();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const { categories } = useSelector((state) => state.categories);

  const filterCategoriesByCategory = useMemo(() => {
    return categories?.filter(
      (category) => category?.category === selectedCategory
    );
  }, [categories, selectedCategory]);

  const { filteredItems } = useSearch(
    searchQuery,
    filterCategoriesByCategory || []
  );
  return (
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
          <Table columns={categoriesTableColumns} dataSource={filteredItems} />
        </>
      )}
    </Card>
  );
};

export default CategoriesTable;
