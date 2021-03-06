import React from "react";
import PropTypes from "prop-types";

const TabOverview = ({score, level, rating, description, director, starring}) => {
  const formattingList = (list) => {
    const slice = list.slice(0, 4);
    return (`${slice.join(`, `)} and other...`);
  };

  return <React.Fragment>
    <div className="movie-rating">
      <div className="movie-rating__score">{score}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{level}</span>
        <span className="movie-rating__count">{rating}</span>
      </p>
    </div>

    <div className="movie-card__text">
      {description}

      <p className="movie-card__director"><strong>Director: {director}</strong></p>
      <p className="movie-card__starring"><strong>Starring: {formattingList(starring)}</strong></p>

    </div>
  </React.Fragment>;
};

TabOverview.propTypes = {
  score: PropTypes.number.isRequired,
  level: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TabOverview;

