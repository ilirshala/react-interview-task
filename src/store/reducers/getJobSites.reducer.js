import {
  GET_JOBSITES,
  GET_JOBSITES_FAIL,
  GET_JOBSITES_SUCCESS,
} from "../actionTypes";

const INITIAL_STATE = {
  getJobSitesLoading: false,
  getJobSitesSuccess: false,
  getJobSitesError: null,
  jobsites: [],
};

const jobsiteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_JOBSITES:
      return {
        ...state,
        getJobSitesLoading: true,
        getJobSitesSuccess: false,
        getJobSitesError: null,
      };
    case GET_JOBSITES_SUCCESS:
      return {
        ...state,
        getJobSitesLoading: false,
        getJobSitesSuccess: true,
        getJobSitesError: null,
        jobsites: action.payload,
      };
    case GET_JOBSITES_FAIL:
      return {
        ...state,
        getJobSitesLoading: false,
        getJobSitesSuccess: false,
        getJobSitesError: action.payload,
      };
    default:
      return state;
  }
};

export default jobsiteReducer;
