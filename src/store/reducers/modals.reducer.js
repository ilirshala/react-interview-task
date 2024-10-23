import { TOGGLE_ADD_JOBSITE_MODAL } from "../actionTypes";

const INITIAL_STATE = {
  isAddJobsiteModalOpen: false,
};

const modalsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_ADD_JOBSITE_MODAL:
      return {
        ...state,
        isAddJobsiteModalOpen: !state.isAddJobsiteModalOpen,
      };
    default:
      return state;
  }
};

export default modalsReducer;
