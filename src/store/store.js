import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import jobsiteReducer from "./reducers/getJobSites.reducer";
import modalsReducer from "./reducers/modals.reducer";
import addJobsiteReducer from "./reducers/addJobsite.reducer";

const rootReducer = combineReducers({
  jobsites: jobsiteReducer,
  modals: modalsReducer,
  addJobsite: addJobsiteReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
