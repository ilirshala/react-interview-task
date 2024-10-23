import React from "react";
import HomeStatuses from "../../components/home-statuses";
import JobSitesTable from "../../components/jobsites-table";
import AddJobsiteModal from "../../components/modals/add-jobsite-modal";
import DeleteJobsiteModal from "../../components/modals/delete-jobiste-modal";

const Home = () => {
  return (
    <>
      <AddJobsiteModal />
      <DeleteJobsiteModal />
      <HomeStatuses />
      <JobSitesTable />
    </>
  );
};

export default Home;
