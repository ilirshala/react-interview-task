/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Button, Card, Space, Table } from "antd";
import StatusCard from "../status-card";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import TableActions from "./table-actions";

const columns = [
  {
    title: "Jobsite Name",
    dataIndex: "jobsitename",
    key: "jobsitename",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (_, { status }) => (
      <>
        <StatusCard status={status} cardSize="small" />
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Button style={{ backgroundColor: "#1890FF" }}>
          <EditTwoTone twoToneColor={"#fff"} />
        </Button>

        <Button style={{ backgroundColor: "#FF4D4F" }}>
          <DeleteTwoTone twoToneColor={"#fff"} />
        </Button>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    jobsitename: "John Brown",
    status: "Completed",
  },
  {
    key: "2",
    jobsitename: "Jim Green",
    status: "onRoad",
  },
];

const JobSitesTable = () => {
  return (
    <Card bordered={false}>
      <TableActions />
      <Table columns={columns} dataSource={data} />
    </Card>
  );
};

export default JobSitesTable;
