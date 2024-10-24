import {
  TOGGLE_ADD_CATEGORY_MODAL,
  TOGGLE_ADD_JOBSITE_MODAL,
  TOGGLE_DELETE_JOBSITE_MODAL,
} from "../../types/modalsActions";

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
export const toggleAddCategoryModal = (payload) => {
  return (dispatch) => {
    dispatch({ type: TOGGLE_ADD_CATEGORY_MODAL, payload: payload });
  };
};
