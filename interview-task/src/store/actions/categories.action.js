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
import api from "../../service/axios.interceptors";

export const getCategories = (jobsiteId) => {
  return async (dispatch) => {
    dispatch({ type: GET_CATEGORIES });

    try {
      const response = await api.get(`/categories`);

      if (response.status >= 200 && response.status < 300) {
        const filteredCategories = response.data.filter(
          (category) => category.jobsiteId === jobsiteId
        );

        dispatch({ type: GET_CATEGORIES_SUCCESS, payload: filteredCategories });
      }
    } catch (error) {
      dispatch({ type: GET_CATEGORIES_FAIL, payload: error.message });
    }
  };
};

export const addCategory = (body) => {
  return async (dispatch) => {
    dispatch({ type: ADD_CATEGORY });
    try {
      const response = await api.post("/categories", body);
      if (response.status >= 200 && response.status < 300) {
        dispatch({ type: ADD_CATEGORY_SUCCESS, payload: response.data });
      }
    } catch (error) {
      dispatch({ type: ADD_CATEGORY_FAIL, payload: error });
    }
  };
};

export const updateCategory = (categoryId, body) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_CATEGORY });
    try {
      const response = await api.put(`/categories/${categoryId}`, body);

      if (response.status >= 200 && response.status < 300) {
        dispatch({ type: UPDATE_CATEGORY_SUCCESS, payload: response.data });
      }
    } catch (error) {
      dispatch({ type: UPDATE_CATEGORY_FAIL, payload: error.message });
    }
  };
};
