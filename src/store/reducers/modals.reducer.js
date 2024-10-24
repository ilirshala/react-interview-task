import {
  TOGGLE_ADD_JOBSITE_MODAL,
  TOGGLE_DELETE_JOBSITE_MODAL,
} from "../../types/modalsActions";

const INITIAL_STATE = {
  isAddJobsiteModalOpen: false,
  isDeleteJobsiteModalOpen: false,

  jobsiteToDeleteId: null,
};

const modalsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_ADD_JOBSITE_MODAL:
      return {
        ...state,
        isAddJobsiteModalOpen: !state.isAddJobsiteModalOpen,
      };
    case TOGGLE_DELETE_JOBSITE_MODAL:
      return {
        ...state,
        isDeleteJobsiteModalOpen: !state.isDeleteJobsiteModalOpen,
        jobsiteToDeleteId: action.payload,
      };
    default:
      return state;
  }
};

export default modalsReducer;
