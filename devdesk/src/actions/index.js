import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get(`https://devdeskqueue-be.herokuapp.com/api/tickets`)
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
    .post("https://devdeskqueue-be.herokuapp.com/api/tickets", newTicket)
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
      updatedTicket
    )
    .then(res => {
      console.log(res.data);
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
    .delete(`https://devdeskqueue-be.herokuapp.com/api/tickets/${id}`)
    .then(res => {
      console.log(res.data);
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

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  localStorage.removeItem("token");
  return axios
    .post("", credentials)
    .this(res => {
      localStorage.setItem("token", res.data.payload);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
        credentials: credentials
      });
    })
    .catch(err => {
      if (err.response.status === 403) {
        localStorage.removeItem("token");
      }
      dispatch({ type: LOGIN_FAIL, payload: err.response });
    });
};

//
//Test actions and action creators to test form functionality
//

export const ADD_TEST_TICKET = "ADD_TEST_TICKET";
export const CREATE_TEST_TICKET = "CREATE_TEST_TICKET";
export const VIEW_TEST_TICKETS = "VIEW_TEST_TICKETS";

export const testAddTicket = newTicket => dispatch => {
  dispatch({ type: ADD_TEST_TICKET, payload: newTicket });
};

export const createTicket = () => dispatch => {
  dispatch({ type: CREATE_TEST_TICKET });
};
export const viewTickets = () => dispatch => {
  dispatch({ type: VIEW_TEST_TICKETS });
};

//
//  Test Actions and Action Creators to test delete functionality
//

export const DELETE_TEST_TICKET_SUCCESS = "DELETE_TEST_TICKET_SUCCESS";

export const testDeleteTicket = id => {
  return {
    type: DELETE_TEST_TICKET_SUCCESS,
    payload: id
  };
};

export const UPDATE_TEST_TICKET = "UPDATE_TEST_TICKET";

export const updateTestTicket = (ticket, id) => dispatch => {
  dispatch({
    type: UPDATE_TEST_TICKET,
    ticket,
    id
  });
};

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
