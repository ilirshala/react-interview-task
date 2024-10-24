/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Card, Table } from "antd";
import TableActions from "../table-actions";
import { useDispatch, useSelector } from "react-redux";
import { jobSitesTableColumns } from "../../utils/tablesColumns";
import { useNavigate } from "react-router-dom";
import { toggleAddJobsiteModal } from "../../store/actions/modals.action";
import { useSearch } from "../../hooks/useSearch";
const JobSitesTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { jobsites } = useSelector((state) => state.jobsites);
  const [searchQuery, setSearchQuery] = useState("");
  const { filteredItems } = useSearch(searchQuery, jobsites);
  const columnsWithNavigation = jobSitesTableColumns.map((col) => {
    if (col.dataIndex === "jobsitename") {
      return {
        ...col,
        render: (text, record) => (
          <a onClick={() => navigate(`/${record.id}`)}>{text}</a>
        ),
      };
    }
    return col;
  });
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
