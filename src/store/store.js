import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import jobsiteReducer from "./reducers/getJobSites.reducer";

const rootReducer = combineReducers({
  jobsites: jobsiteReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
