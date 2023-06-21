import * as LS from "../../utils/localStorage";
import { authActionsTypes } from "../actions/actionTypes";
import { getIsLoggedin } from "../actions/authActions";

const initialState = {
  isLoggedIn: !!getIsLoggedin(),
  token: LS.getLS("token"),
};

// reducer takes state and an action as parameters
// reducer returns updated state again

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case authActionsTypes.SET_LOGGEDIN_TOKEN:
      return { ...state, isLoggedIn: true, token: action.payload };
    case authActionsTypes.LOGOUT:
      return { ...state, isLoggedIn: false, token: null };
  }
  return { ...state };
};

export default authReducers;
