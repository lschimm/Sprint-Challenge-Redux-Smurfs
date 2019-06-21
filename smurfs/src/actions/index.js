/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from "axios";

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const SMURFS_FETCH_SUCCESS = "SMURFS_FETCH_SUCCESS";

export const ADD_SMURF = "ADD_SMURF";
export const SMURF_ADDED_SUCCESS = "SMURF_ADDED_SUCCESS";

export const SMURF_ERROR = "SMURF_ERROR";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      // console.log('error from axios:: res.fetch', res);
      dispatch({
        type: SMURFS_FETCH_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      // console.log('error from axios: err.fetch:', err);
      dispatch({
        type: SMURF_ERROR,
        payload: err
      });
    });
};

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: ADD_SMURF });
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(res => {
      dispatch({
        type: SMURF_ADDED_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: SMURF_ERROR,
        payload: err
      });
    });
};
