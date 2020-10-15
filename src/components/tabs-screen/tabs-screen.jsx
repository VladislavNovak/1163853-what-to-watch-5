import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const TabsType = {
  OVERVIEW: `overview`,
  DETAILS: `details`,
  REVIEW: `review`
};

const TabsScreen = () => {
  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {Object.entries(TabsType).map(([key, value]) => {
          <li className="movie-nav__item movie-nav__item--active">
            <a href="#" className="movie-nav__link">Overview</a>
          </li>
        })}
        {/* <li className="movie-nav__item movie-nav__item--active">
          <a href="#" className="movie-nav__link">Overview</a>
        </li>
        <li className="movie-nav__item">
          <a href="#" className="movie-nav__link">Details</a>
        </li>
        <li className="movie-nav__item">
          <a href="#" className="movie-nav__link">Reviews</a>
        </li> */}
      </ul>
    </nav>
  );
}

export default TabsScreen;
