import {
  GET_CATEGORIES,
  GET_CATEGORIES_FAIL,
  GET_CATEGORIES_SUCCESS,
} from "../../types/categoriesActions";

const INITAL_STATE = {
  categories: [],
  getCategoriesLoading: false,
  getCategoriesSuccess: false,
  getCategoriesError: null,
};

const categoriesReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        getCategoriesLoading: true,
        getCategoriesSuccess: false,
        getCategoriesError: null,
      };
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        getCategoriesLoading: false,
        getCategoriesSuccess: true,
        getCategoriesError: null,
        categories: action.payload,
      };
    case GET_CATEGORIES_FAIL:
      return {
        ...state,
        getCategoriesLoading: false,
        getCategoriesSuccess: false,
        getCategoriesError: action.payload,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
