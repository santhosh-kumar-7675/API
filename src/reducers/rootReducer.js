import { combineReducers } from "redux";
import userReducer from "./userReducer";
import teamReducer from "./teamReducer";
const rootReducer = combineReducers({
  userReducer, 
  teamReducer,
});

export default rootReducer;
