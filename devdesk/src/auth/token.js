// import { LOGIN_SUCCESS } from "../actions";

// export const setToken = store => next => action => {
//   if (action.type === LOGIN_SUCCESS) {
//     localStorage.setItem("userToken", action.token);
//     localStorage.setItem("user", JSON.stringify(action.user));
//   }
//   next(action);
// };

import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS } from "../actions";

export const setToken = store => next => action => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("userToken", action.token);
      localStorage.setItem("user", JSON.stringify(action.user));
      localStorage.setItem("isLoggedIn", true);
      next(action);
      return;
    case LOGIN_FAIL:
      localStorage.removeItem("userToken");
      localStorage.setItem("isLoggedIn", false);
      next(action);
      return;
    case LOGOUT_SUCCESS:
      localStorage.removeItem("userToken");
      localStorage.removeItem("user");
      localStorage.setItem("isLoggedIn", false);
      next(action);
      return;
    default:
      next(action);
      return;
  }
};
