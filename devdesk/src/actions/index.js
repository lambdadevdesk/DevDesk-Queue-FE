import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get(`https://devdeskqueue-be.herokuapp.com/api/tickets`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
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
    .post("https://devdeskqueue-be.herokuapp.com/api/tickets", newTicket, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res);
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
    .put(
      `https://devdeskqueue-be.herokuapp.com/api/tickets/${id}`,
      updatedTicket,
      {
        headers: { Authorization: localStorage.getItem("token") }
      }
    )
    .then(res => {
      console.log(res.data);
      dispatch({
        type: EDIT_TICKET_SUCCESS,
        payload: res.data,
        id
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
    .delete(`https://devdeskqueue-be.herokuapp.com/api/tickets/${id}`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
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

//
// Login
//

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGIN_RESOLVED = "LOGIN_RESOLVED";

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });

  return axios
    .post("https://devdeskqueue-be.herokuapp.com/api/login", credentials)
    .then(res => {
      if (res.status === 200) {
        dispatch({ type: LOGIN_SUCCESS });
        setTimeout(() => dispatch({ type: LOGIN_RESOLVED }), 2000);
      }
      localStorage.setItem("token", res.data.token);
    })
    .catch(err => {
      if (err.response.status === 500 || err.response.status === 404) {
        localStorage.removeItem("token");
        dispatch({ type: LOGIN_FAIL, payload: err.response.data.msg });
      }
      setTimeout(() => dispatch({ type: LOGIN_RESOLVED }), 2000);
    });
};

//
//Test actions and action creators to test form functionality
//

//Test to toggle Admin/Student View

export const TOGGLE_ADMIN = "TOGGLE_ADMIN";

export const toggleAdmin = () => dispatch => {
  dispatch({ type: TOGGLE_ADMIN });
};

// Test to resolve tickets if you are an Admin

export const RESOLVE_TICKET = "RESOLVE_TICKET";
export const resolveTicket = id => dispatch => {
  dispatch({ type: RESOLVE_TICKET, id });
};

//Test to assign tickets to yourself if you are an Admin
export const ASSIGN_TICKET = "ASSIGN_TICKET";
export const assignTicket = id => dispatch => {
  dispatch({ type: ASSIGN_TICKET, id });
};
