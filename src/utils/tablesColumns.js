import { Button, Space } from "antd";
import StatusCard from "../components/status-card";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";

export const jobSitesTableColumns = [
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
