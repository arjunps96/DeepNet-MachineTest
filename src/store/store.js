import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "../reducer/index";

const initialState = {};
const middleware = [thunk];
/**
 * Creating Store for redux provider,
 * composeWithDevTools:Used for devtool extension
 */
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
