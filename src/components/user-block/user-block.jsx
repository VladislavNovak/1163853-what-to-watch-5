import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {AuthorizationStatus, JumpTo} from "../../utils/constants";

const UserBlockUnauthorized = () => {
  return (
    <div className="user-block">
      <Link to={JumpTo.LOGIN} className="user-block__link">Sign in</Link>
    </div>
  );
};

const UserBlockAuthorized = ({avatar}) => {
  return (
    <div className="user-block">
      <div className="user-block__avatar">
        <Link to={JumpTo.MYLIST}>
        <img src={avatar} alt="User avatar" width="63" height="63" />
        </Link>
      </div>
    </div>
  );
};

const UserBlock = ({authorizationStatus, userAvatar}) => {

  return (
    (authorizationStatus === AuthorizationStatus.AUTH && userAvatar) ? <UserBlockAuthorized avatar={userAvatar} /> : <UserBlockUnauthorized />
  );
};

UserBlockAuthorized.propTypes = {
  avatar: PropTypes.string.isRequired,
};

UserBlock.propTypes = {
  authorizationStatus: PropTypes.string,
  userAvatar: PropTypes.string,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  userAvatar: USER.userAvatar,
});

export {UserBlock};
export default connect(mapStateToProps)(UserBlock);
