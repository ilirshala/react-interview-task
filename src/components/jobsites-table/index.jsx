/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Card, Table } from "antd";
import TableActions from "./table-actions";
import { useSelector } from "react-redux";
import { jobSitesTableColumns } from "../../utils/tablesColumns";
const JobSitesTable = () => {
  const { jobsites } = useSelector((state) => state.jobsites);
  return (
    <Card bordered={false}>
      <TableActions />
      <Table columns={jobSitesTableColumns} dataSource={jobsites} />
    </Card>
  );
};

export default JobSitesTable;
