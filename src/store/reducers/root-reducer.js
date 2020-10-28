import {combineReducers} from "redux";
import {appState} from "./appState/appState";

const NameSpace = {
  APP_STATE: `APP_STATE`,
};

export default combineReducers({
  [NameSpace.APP_STATE]: appState,
});

