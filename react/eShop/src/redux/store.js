import { combineReducers, createStore } from "redux";
import authReducers from "./reducers/authReducer";
import { devToolsEnhancerDevelopmentOnly } from "@redux-devtools/extension";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
  auth: authReducers,
  cart: cartReducer,
});

const store = createStore(rootReducer, devToolsEnhancerDevelopmentOnly());

export default store;
