/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Card, Table } from "antd";
import TableActions from "../table-actions";
import { toggleAddJobsiteModal } from "../../store/actions/modals.action";
import { useJobsiteTable } from "../../hooks/useJobsiteTable";
import "./style.css";
import TableHeader from "../table-header";
const JobSitesTable = () => {
  const {
    dispatch,
    searchQuery,
    setSearchQuery,
    filteredItems,
    columnsWithNavigation,
  } = useJobsiteTable();
  return (
    <Card bordered={false} className="jobsitesTable">
      <TableHeader title={"Jobsites"} />
      <TableActions
        title={"Jobsites"}
        onClickAddButton={() => dispatch(toggleAddJobsiteModal())}
        searchValue={searchQuery}
        onChangeSearch={(e) => setSearchQuery(e.target.value)}
        placeholder={"Search a driver"}
        style={{ marginBottom: "10px" }}
      />
      <Table columns={columnsWithNavigation} dataSource={filteredItems} />
    </Card>
  );
};

export default JobSitesTable;
