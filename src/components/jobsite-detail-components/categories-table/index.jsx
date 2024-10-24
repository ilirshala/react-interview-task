import { Card, Table } from "antd";
import React from "react";
import noService from "../../../assets/noService.png";
import TableActions from "../../table-actions";
import { toggleCategoryModal } from "../../../store/actions/modals.action";
import { categoriesTableColumns } from "../../../utils/tablesColumns";
import "./style.css";
import { useCategoriesTable } from "../../../hooks/useCategoriesTable";

const CategoriesTable = ({ selectedCategory }) => {
  const { dispatch, filteredItems, jobsiteId, setSearchQuery, searchQuery } =
    useCategoriesTable(selectedCategory);
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
