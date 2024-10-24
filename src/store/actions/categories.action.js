import {
  GET_CATEGORIES,
  GET_CATEGORIES_FAIL,
  GET_CATEGORIES_SUCCESS,
} from "../../types/categoriesActions";
import api from "../../service/axios.interceptors";

export const getCategories = (jobsiteId) => {
  return async (dispatch) => {
    dispatch({ type: GET_CATEGORIES });

    try {
      const response = await api.get(`/categories`);

      if (response.status >= 200 && response.status < 300) {
        const filteredCategories = response.data.categories.filter(
          (category) => category.jobsiteId === jobsiteId
        );

        dispatch({ type: GET_CATEGORIES_SUCCESS, payload: filteredCategories });
      }
    } catch (error) {
      dispatch({ type: GET_CATEGORIES_FAIL, payload: error.message });
    }
  };
};
