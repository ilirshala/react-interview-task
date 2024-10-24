/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Card, Table } from "antd";
import TableActions from "../table-actions";
import { toggleAddJobsiteModal } from "../../store/actions/modals.action";
import { useJobsiteTable } from "../../hooks/useJobsiteTable";
const JobSitesTable = () => {
  const {
    dispatch,
    searchQuery,
    setSearchQuery,
    filteredItems,
    columnsWithNavigation,
  } = useJobsiteTable();
  return (
    <Card bordered={false}>
      <TableActions
        title={"Jobsites"}
        onClickAddButton={() => dispatch(toggleAddJobsiteModal())}
        searchValue={searchQuery}
        onChangeSearch={(e) => setSearchQuery(e.target.value)}
        placeholder={"Search a driver"}
      />
      <Table columns={columnsWithNavigation} dataSource={filteredItems} />
    </Card>
  );
};

export default JobSitesTable;
