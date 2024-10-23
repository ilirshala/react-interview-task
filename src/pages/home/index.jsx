import React, { useEffect } from "react";
import HomeStatuses from "../../components/home-statuses";
import JobSitesTable from "../../components/jobsites-table";
import { useDispatch } from "react-redux";
import { getJobSites } from "../../store/actions/jobsites.action";
import AddJobsiteModal from "../../components/modals/add-jobsite-modal";
import DeleteJobsiteModal from "../../components/modals/delete-jobiste-modal";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobSites());
  }, []);
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
