import {AuthorizationStatus} from "../../../utils/constants";
import {extend} from "../../../utils/utils";
import {ActionType} from "../../action";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userEmailPassword: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });

    case ActionType.SET_USER_DATA:
      return extend(state, {
        userEmailPassword: action.payload,
      });
  }

  return state;
};

export {user};
