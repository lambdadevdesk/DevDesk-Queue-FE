import axios from "axios";

// Action to fetch list of tickets available

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
      console.log('inside get data');
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_DATA_FAIL, payload: err });
    });
};

// Action to create a new ticket

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
      dispatch({
        type: ADD_TICKET_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: ADD_TICKET_FAIL, payload: err.response });
    });
};

// Action to update ticket information

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

// Action to perform Delete operation

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

// Action to Perform Login operation

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
        setTimeout(
          () => dispatch({ type: LOGIN_SUCCESS, userId: res.data.user_id }),
          2000
        );
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

// Action to get currently logged in user

export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAIL = "FETCH_USER_FAIL";
export const getUser = id => dispatch => {
  dispatch({ type: FETCH_USER_START });
  axios
    .get(`https://devdeskqueue-be.herokuapp.com/api/users`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({ type: FETCH_USER_SUCCESS, payload: res.data, id });
    })
    .catch(err => {
      dispatch({ type: FETCH_USER_FAIL, payload: err });
    });
};

// Action for admins to resolve & reopen tickets

export const RESOLVE_TICKET_START = "RESOLVE_TICKET_START";
export const RESOLVE_TICKET_SUCCESS = "RESOLVE_TICKET_SUCCESS";
export const RESOLVE_TICKET_FAIL = "RESOLVE_TICKET_FAIL";
export const resolveTicket = (id, updatedTicket) => dispatch => {
  dispatch({ type: RESOLVE_TICKET_START, id });
  axios
    .put(
      `https://devdeskqueue-be.herokuapp.com/api/tickets/${id}`,
      updatedTicket,
      {
        headers: { Authorization: localStorage.getItem("token") }
      }
    )
    .then(res => {
      dispatch({ type: RESOLVE_TICKET_SUCCESS, payload: res.data, id });
    })
    .catch(err => {
      dispatch({ type: RESOLVE_TICKET_FAIL, payload: err });
    });
};

export const ASSIGN_TICKET_START = "ASSIGN_TICKET_START";
export const ASSIGN_TICKET_SUCCESS = "ASSIGN_TICKET_SUCCESS";
export const ASSIGN_TICKET_FAIL = "ASSIGN_TICKET_FAIL";
export const assignTicket = (id, updatedTicket) => dispatch => {
  dispatch({ type: ASSIGN_TICKET_START, id });
  axios
    .put(
      `https://devdeskqueue-be.herokuapp.com/api/tickets/${id}`,
      updatedTicket,
      {
        headers: { Authorization: localStorage.getItem("token") }
      }
    )
    .then(res => {
      dispatch({ type: ASSIGN_TICKET_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ASSIGN_TICKET_FAIL, payload: err });
    });
};

//
// Sign Up Actions
//

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

export const signup = user => dispatch => {
  dispatch({ type: SIGNUP_START });
  return axios
    .post("https://devdeskqueue-be.herokuapp.com/api/register", user)
    .then(res => {
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: SIGNUP_FAIL, payload: err.response });
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
