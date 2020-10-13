import { combineReducers } from "redux";
import { reducer } from "./meet/reducer";
import { connectRouter } from "connected-react-router";
//import { ui } from "./ui/reducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    reducer,
  });
export default createRootReducer;
