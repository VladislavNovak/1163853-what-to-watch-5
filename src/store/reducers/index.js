import {combineReducers} from "redux";
import {appState} from "./appState/appState";
import {NameSpace} from "../../utils/utils";

export default combineReducers({
  [NameSpace.APP_STATE]: appState,
});

