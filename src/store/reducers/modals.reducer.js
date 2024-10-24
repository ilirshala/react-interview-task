import {
  TOGGLE_ADD_JOBSITE_MODAL,
  TOGGLE_DELETE_JOBSITE_MODAL,
  TOGGLE_ADD_CATEGORY_MODAL,
} from "../../types/modalsActions";

const INITIAL_STATE = {
  isAddJobsiteModalOpen: false,
  isDeleteJobsiteModalOpen: false,
  isAddCategoryModalOpen: false,

  jobsiteToDeleteId: null,
  categoryDetails: null,
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
    case TOGGLE_ADD_CATEGORY_MODAL:
      return {
        ...state,
        isAddCategoryModalOpen: !state.isAddCategoryModalOpen,
        categoryDetails: action.payload,
      };
    default:
      return state;
  }
};

export default modalsReducer;
