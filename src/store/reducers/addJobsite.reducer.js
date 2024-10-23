import {
  ADD_JOBSITE,
  ADD_JOBSITE_FAIL,
  ADD_JOBSITE_SUCCESS,
} from "../actionTypes";

const INITIAL_STATE = {
  addJobsiteLoading: false,
  addJobsiteSuccess: false,
  addJobsiteError: null,
};

const addJobsiteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_JOBSITE:
      return {
        ...state,
        addJobsiteLoading: true,
        addJobsiteSuccess: false,
        addJobsiteError: null,
      };
    case ADD_JOBSITE_SUCCESS:
      return {
        ...state,
        addJobsiteLoading: false,
        addJobsiteSuccess: true,
        addJobsiteError: null,
      };
    case ADD_JOBSITE_FAIL:
      return {
        ...state,
        addJobsiteLoading: false,
        addJobsiteSuccess: false,
        addJobsiteError: action.payload,
      };
    default:
      return state;
  }
};

export default addJobsiteReducer;
