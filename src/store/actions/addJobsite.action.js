import {
  ADD_JOBSITE,
  ADD_JOBSITE_SUCCESS,
  ADD_JOBSITE_FAIL,
} from "../actionTypes";
import api from "../../service/axios.interceptors";

export const addJobsite = (body) => {
  return async (dispatch) => {
    dispatch({ type: ADD_JOBSITE });
    try {
      const response = await api.post("/jobsites", body);
      if (response.status >= 200 && response.status < 300) {
        console.log(response.data, "response.data");
        dispatch({ type: ADD_JOBSITE_SUCCESS });
      }
    } catch (error) {
      dispatch({ type: ADD_JOBSITE_FAIL, payload: error });
    }
  };
};
