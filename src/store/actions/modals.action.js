import { TOGGLE_ADD_JOBSITE_MODAL } from "../actionTypes";

export const toggleAddJobsiteModal = () => {
  return (dispatch) => {
    dispatch({ type: TOGGLE_ADD_JOBSITE_MODAL });
  };
};
