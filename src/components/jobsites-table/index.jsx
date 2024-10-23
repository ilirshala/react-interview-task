/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Card, Table } from "antd";
import TableActions from "./table-actions";
import { useSelector } from "react-redux";
import { jobSitesTableColumns } from "../../utils/tablesColumns";
import { useNavigate } from "react-router-dom";
const JobSitesTable = () => {
  const navigate = useNavigate();
  const { jobsites } = useSelector((state) => state.jobsites);

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
      <TableActions />
      <Table columns={columnsWithNavigation} dataSource={jobsites} />
    </Card>
  );
};

export default JobSitesTable;
