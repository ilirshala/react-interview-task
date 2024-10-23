import {
  TOGGLE_ADD_JOBSITE_MODAL,
  TOGGLE_DELETE_JOBSITE_MODAL,
} from "../actionTypes";

export const toggleAddJobsiteModal = () => {
  return (dispatch) => {
    dispatch({ type: TOGGLE_ADD_JOBSITE_MODAL });
  };
};
export const toggleDeleteJobsiteModal = (jobsiteId) => {
  return (dispatch) => {
    dispatch({ type: TOGGLE_DELETE_JOBSITE_MODAL, payload: jobsiteId });
  };
};
