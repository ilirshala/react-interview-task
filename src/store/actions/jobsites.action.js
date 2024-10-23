import {
  GET_JOBSITES,
  GET_JOBSITES_FAIL,
  GET_JOBSITES_SUCCESS,
  ADD_JOBSITE,
  ADD_JOBSITE_SUCCESS,
  ADD_JOBSITE_FAIL,
} from "../actionTypes";
import api from "../../service/axios.interceptors";

export const getJobSites = () => {
  return async (dispatch) => {
    dispatch({ type: GET_JOBSITES });

    try {
      const response = await api.get("/jobsites");

      if (response.status === 200) {
        console.log(response, "response");
        dispatch({ type: GET_JOBSITES_SUCCESS, payload: response.data });
      } else {
        dispatch({ type: GET_JOBSITES_FAIL, payload: response.data.error });
      }
    } catch (err) {
      dispatch({ type: GET_JOBSITES_FAIL, payload: err.message });
    }
  };
};

export const addJobsite = (body) => {
  return async (dispatch) => {
    dispatch({ type: ADD_JOBSITE });
    try {
      const response = await api.post("/jobsites", body);
      if (response.status >= 200 && response.status < 300) {
        dispatch({ type: ADD_JOBSITE_SUCCESS, payload: response.data });
      }
    } catch (error) {
      dispatch({ type: ADD_JOBSITE_FAIL, payload: error });
    }
  };
};
