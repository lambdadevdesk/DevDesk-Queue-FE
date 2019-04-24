import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get(``)
    .then(res => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_DATA_FAIL, payload: err });
    });
};

export const ADD_TICKET_START = "ADD_TICKET_START";
export const ADD_TICKET_SUCCESS = "ADD_TICKET_SUCCESS";
export const ADD_TICKET_FAIL = "ADD_TICKET_FAIL";

export const addTicket = newTicket => dispatch => {
  dispatch({ type: ADD_TICKET_START });
  axios
    .post("")
    .then(res => {
      dispatch({
        type: ADD_TICKET_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: ADD_TICKET_FAIL, payload: err.response });
    });
};

export const EDIT_TICKET_START = "EDIT_TICKET_START";
export const EDIT_TICKET_SUCCESS = "EDIT_TICKET_SUCCESS";
export const EDIT_TICKET_FAIL = "EDIT_TICKET_FAIL";

export const editTicket = (id, updatedTicket) => dispatch => {
  dispatch({ type: EDIT_TICKET_START });
  axios
    .put("")
    .then(res => {
      dispatch({
        type: EDIT_TICKET_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: EDIT_TICKET_FAIL, payload: err.response });
    });
};

export const DELETE_TICKET_START = "DELETE_TICKET_START";
export const DELETE_TICKET_SUCCESS = "DELETE_TICKET_SUCCESS";
export const DELETE_TICKET_FAIL = "DELETE_TICKET_FAIL";

export const deleteTicket = id => dispatch => {
  dispatch({ type: DELETE_TICKET_START });
  axios
    .delete("")
    .then(res => {
      dispatch({
        type: DELETE_TICKET_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: DELETE_TICKET_FAIL, payload: err.response });
    });
};
