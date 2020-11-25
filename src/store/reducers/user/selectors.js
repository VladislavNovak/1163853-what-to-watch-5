const { NameSpace } = require("../../../utils/constants");

const selectsAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;

export {
  selectsAuthorizationStatus
};
