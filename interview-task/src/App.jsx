import { useDispatch } from "react-redux";
import Router from "./routes/sections";
import { useEffect } from "react";
import { getJobSites } from "./store/actions/jobsites.action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobSites());
  }, [dispatch]);
  return <Router />;
}

export default App;
