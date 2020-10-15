import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const TabsType = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEW: `Review`
};

const TabsScreen = (props) => {
  const {film} = props;
  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {Object.entries(TabsType).map(([key, value]) => {
          return (
            <li key={key} className="movie-nav__item movie-nav__item--active">
              <a href="#" className="movie-nav__link">{value}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  );
}

export default TabsScreen;
