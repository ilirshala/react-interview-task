import React, { useEffect } from "react";
import HomeStatuses from "../../components/home-statuses";
import JobSitesTable from "../../components/jobsites-table";
import { useDispatch } from "react-redux";
import { getJobSites } from "../../store/actions/getJobSites.action";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobSites());
  }, []);
  return (
    <>
      <HomeStatuses />
      <JobSitesTable />
    </>
  );
};

export default Home;
