/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from "axios";

export const FETCH_SMURFS = "FETCH_SMURFS";
export const SMURFS_FETCHED = "SMURFS_FETCHED";
export const ADD_SMURFS = "ADD_SMURFS";

export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";
export const ADD_SMURFS_FAILURE = "ADD_SMURFS_FAILURE";

export const SMURF_ERROR = "SMURF_ERROR";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.

   Be sure to include action types for each type of action creator.
   Also, be sure to mind the "pending" states like, fetching, creating,
   updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf

*/

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS });
  axios
    .get("http://localhost:3333/smurfs")
    .then(response => {
      dispatch({ type: SMURFS_FETCHED, payload: response.data });
    })
    .catch(err => console.log("error from action", err));
};

export const addSmurfs = newSmurf => dispatch => {
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(res => {
      console.log(res.data);
      dispatch({ type: ADD_SMURFS, payload: res.data });
    })
    .catch(err => {
      console.log("axios error", err);
      dispatch({ type: ADD_SMURFS_FAILURE, payload: err.response });
    });
};
