import {
  TOGGLE_CATEGORY_MODAL,
  TOGGLE_ADD_JOBSITE_MODAL,
} from "../../types/modalsActions";

export const toggleAddJobsiteModal = () => {
  return (dispatch) => {
    dispatch({ type: TOGGLE_ADD_JOBSITE_MODAL });
  };
};

export const toggleCategoryModal = (payload) => {
  return (dispatch) => {
    dispatch({ type: TOGGLE_CATEGORY_MODAL, payload: payload });
  };
};
