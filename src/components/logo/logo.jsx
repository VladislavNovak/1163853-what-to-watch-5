import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const WITHOUT_TRANDITION = false;

const MainLogo = ({additionalClass}) => {
  return (
    <div className="logo">
      <a className={`logo__link ${additionalClass}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
};

const RestLogo = ({path, additionalClass}) => {
  return (
    <div className="logo">
      <Link to={path} className={`logo__link ${additionalClass}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
};

const Logo = ({path = WITHOUT_TRANDITION, additionalClass = ``}) => {
  return (
    path ? <RestLogo path={path} additionalClass={additionalClass} /> : <MainLogo additionalClass={additionalClass} />
  );
};

MainLogo.propTypes = {
  additionalClass: PropTypes.string.isRequired,
};

RestLogo.propTypes = {
  path: PropTypes.string.isRequired,
  additionalClass: PropTypes.string.isRequired,
};

Logo.propTypes = {
  path: PropTypes.string.isRequired,
  additionalClass: PropTypes.string.isRequired,
};

export default Logo;

