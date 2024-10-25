import React from "react";
import HomeStatuses from "../../components/home-statuses";
import JobSitesTable from "../../components/jobsites-table";
import AddJobsiteModal from "../../components/modals/add-jobsite-modal";

const Home = () => {
  return (
    <>
      <AddJobsiteModal />
      <HomeStatuses />
      <JobSitesTable />
    </>
  );
};

export default Home;
