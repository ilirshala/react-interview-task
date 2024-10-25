import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import jobsiteReducer from "./reducers/jobsites.reducer";
import modalsReducer from "./reducers/modals.reducer";
import categoriesReducer from "./reducers/categories.reducer";

const rootReducer = combineReducers({
  jobsites: jobsiteReducer,
  modals: modalsReducer,
  categories: categoriesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
