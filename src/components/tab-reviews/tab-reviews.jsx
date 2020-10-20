import React from "react";
import PropTypes from "prop-types";
import {reviewPropStructure} from "../../utils/validator.prop";

import Review from "../review/review";

const TabReviews = ({reviews}) => {
  const colLeft = reviews.filter((_, index) => index % 2 === 0);
  const colRight = reviews.filter((_, index) => index % 2 !== 0);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {colLeft.length
          ? colLeft.map(({filmID, quote, author, datetime, rating}, index) => (
            <Review
              key={`${filmID} - ${index}`}
              quote={quote}
              author={author}
              datetime={datetime}
              rating={rating}
            />
          ))
          : ``}
      </div>
      <div className="movie-card__reviews-col">
        {colRight.length
          ? colRight.map(({filmID, quote, author, datetime, rating}, index) => (
            <Review
              key={`${filmID} - ${index}`}
              quote={quote}
              author={author}
              datetime={datetime}
              rating={rating}
            />
          ))
          : ``}
      </div>
    </div>
  );
};

TabReviews.propTypes = {
  reviews: PropTypes.arrayOf(reviewPropStructure).isRequired,
};

export default TabReviews;
