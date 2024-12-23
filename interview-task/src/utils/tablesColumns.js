import StatusCard from "../components/status-card";
import EditButton from "../components/edit-button";

export const jobSitesTableColumns = [
  {
    title: "Jobsite Name",
    dataIndex: "jobsitename",
    key: "jobsitename",
    align: "center",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    align: "center",
    render: (_, { status }) => (
      <>
        <StatusCard status={status} cardSize="small" />
      </>
    ),
  },
];

export const categoriesTableColumns = [
  {
    title: "Nr.",
    dataIndex: "id",
    key: "id",
    render: (text, record, index) => <p>{index + 1}</p>,
  },
  {
    title: "Item",
    dataIndex: "item",
    key: "",
    render: (_, { item }) => <p>{item}</p>,
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
    render: (_, { quantity }) => <p>{quantity}</p>,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    render: (_, { description }) => <p>{description}</p>,
  },
  {
    title: "Notes",
    dataIndex: "notes",
    key: "notes",
    render: (_, { notes }) => <p>{notes}</p>,
  },
  {
    title: "Edit",
    key: "action",
    render: (_, record) => <EditButton category={record} />,
  },
];
