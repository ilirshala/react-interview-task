import {
  TOGGLE_ADD_JOBSITE_MODAL,
  TOGGLE_DELETE_JOBSITE_MODAL,
  TOGGLE_CATEGORY_MODAL,
} from "../../types/modalsActions";

const INITIAL_STATE = {
  isAddJobsiteModalOpen: false,
  isDeleteJobsiteModalOpen: false,
  isCategoryModalOpen: false,

  jobsiteToDeleteId: null,
  serviceDetails: null,
  isEditCategory: false,
  category: null,
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
    case TOGGLE_CATEGORY_MODAL:
      return {
        ...state,
        isCategoryModalOpen: !state.isCategoryModalOpen,
        serviceDetails: action.payload,
        isEditCategory: action?.payload?.isEditCategory,
        category: action?.payload?.categoryToUpdate,
      };
    default:
      return state;
  }
};

export default modalsReducer;
