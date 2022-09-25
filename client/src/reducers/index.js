import { combineReducers } from "redux";
// this reducer is from Redux-Form library, we did not create this reducer
// our goal is to combine this reducer to our reducers
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import streamReducer from "./streamReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer,
});
