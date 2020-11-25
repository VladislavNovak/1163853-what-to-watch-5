import {NameSpace} from "../../../utils/constants";

const selectsAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;

export {
  selectsAuthorizationStatus
};
