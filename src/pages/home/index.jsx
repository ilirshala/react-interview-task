import React, { useEffect } from "react";
import HomeStatuses from "../../components/home-statuses";
import JobSitesTable from "../../components/jobsites-table";
import { useDispatch } from "react-redux";
import { getJobSites } from "../../store/actions/getJobSites.action";
import AddJobsiteModal from "../../components/modals/add-jobsite-modal";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobSites());
  }, []);
  return (
    <>
      <AddJobsiteModal />
      <HomeStatuses />
      <JobSitesTable />
    </>
  );
};

export default Home;
