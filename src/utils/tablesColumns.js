import StatusCard from "../components/status-card";
import JobSiteRowActions from "../components/jobsites-table/row-actions";

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
    title: "Delete",
    key: "action",
    render: (_, record) => <JobSiteRowActions jobsiteId={record?.id} />,
  },
];
