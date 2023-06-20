import { createStore } from "redux";
import authReducers from "./reducers/authReducer";
import { devToolsEnhancerDevelopmentOnly } from "@redux-devtools/extension";

const store = createStore(
  authReducers,
   devToolsEnhancerDevelopmentOnly()
);

export default store;
