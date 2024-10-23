import {
  GET_JOBSITES,
  GET_JOBSITES_FAIL,
  GET_JOBSITES_SUCCESS,
  ADD_JOBSITE,
  ADD_JOBSITE_SUCCESS,
  ADD_JOBSITE_FAIL,
  DELETE_JOBSITE,
  DELETE_JOBSITE_SUCCESS,
  DELETE_JOBSITE_FAIL,
} from "../actionTypes";

const INITIAL_STATE = {
  getJobSitesLoading: false,
  getJobSitesSuccess: false,
  getJobSitesError: null,

  addJobsiteLoading: false,
  addJobsiteSuccess: false,
  addJobsiteError: null,

  deleteJobsiteLoading: false,
  deleteJobsiteSuccess: false,
  deleteJobsiteError: null,

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
        jobsites: [...state.jobsites, action.payload],
      };
    case ADD_JOBSITE_FAIL:
      return {
        ...state,
        addJobsiteLoading: false,
        addJobsiteSuccess: false,
        addJobsiteError: action.payload,
      };
    case DELETE_JOBSITE:
      return {
        ...state,
        deleteJobsiteLoading: true,
        deleteJobsiteSuccess: false,
        deleteJobsiteError: null,
      };
    case DELETE_JOBSITE_SUCCESS:
      const filteredJobsites = state.jobsites.filter(
        (jobsite) => jobsite.id !== action.payload.id
      );
      return {
        ...state,
        deleteJobsiteLoading: false,
        deleteJobsiteSuccess: true,
        deleteJobsiteError: null,
        jobsites: filteredJobsites,
      };
    case DELETE_JOBSITE_FAIL:
      return {
        ...state,
        deleteJobsiteLoading: false,
        deleteJobsiteSuccess: false,
        deleteJobsiteError: action.payload,
      };
    default:
      return state;
  }
};

export default jobsiteReducer;
