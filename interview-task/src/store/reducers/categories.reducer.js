import {
  GET_CATEGORIES,
  GET_CATEGORIES_FAIL,
  GET_CATEGORIES_SUCCESS,
  ADD_CATEGORY,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAIL,
  UPDATE_CATEGORY,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_FAIL,
} from "../../types/categoriesActions";

const INITAL_STATE = {
  categories: [],
  getCategoriesLoading: false,
  getCategoriesSuccess: false,
  getCategoriesError: null,

  addCategoryLoading: false,
  addCategorySuccess: false,
  addCategoryError: null,

  updateCategoryLoading: false,
  updateCategorySuccess: false,
  updateCategoryError: null,
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
    case ADD_CATEGORY:
      return {
        ...state,
        addCategoryLoading: true,
        addCategorySuccess: false,
        addCategoryError: null,
      };
    case ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        addCategoryLoading: false,
        addCategorySuccess: true,
        addCategoryError: null,
        categories: [...state.categories, action.payload],
      };
    case ADD_CATEGORY_FAIL:
      return {
        ...state,
        addCategoryLoading: false,
        addCategorySuccess: false,
        addCategoryError: action.payload,
      };
    case UPDATE_CATEGORY:
      return {
        ...state,
        updateCategoryLoading: true,
        updateCategoryError: null,
        updateCategoriesSuccess: false,
      };
    case UPDATE_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.payload.id ? action.payload : category
        ),
        updateCategoryLoading: false,
        updateCategoriesSuccess: true,
      };
    case UPDATE_CATEGORY_FAIL:
      return {
        ...state,
        updateCategoryLoading: false,
        updateCategoryError: action.payload,
        updateCategoriesSuccess: false,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
