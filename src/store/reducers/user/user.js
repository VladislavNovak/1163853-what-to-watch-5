import {AuthorizationStatus} from "../../../utils/constants";
import {extend} from "../../../utils/utils";
import {ActionType} from "../../action";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userAvatar: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });

    case ActionType.SET_USER_AVATAR:
      return extend(state, {
        userAvatar: action.payload,
      });
  }

  return state;
};

export {user};
