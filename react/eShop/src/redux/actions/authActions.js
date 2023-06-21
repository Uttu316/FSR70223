import * as LS from "../../utils/localStorage";
import { authActionsTypes } from "./actionTypes";

export const setLoggedinToken = (value) => {
  LS.setLS("token", value);
  return {
    type: authActionsTypes.SET_LOGGEDIN_TOKEN,
    payload: value,
  };
};

export const logout = () => {
  LS.clearLS();
  return {
    type: authActionsTypes.LOGOUT,
  };
};

export const getIsLoggedin = () => {
  return LS.getLS("token");
};
