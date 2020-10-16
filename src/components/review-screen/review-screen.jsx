import React from "react";
import PropTypes from "prop-types";

const ReviewScreen = ({quote, author, datetime, rating}) => {

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{quote}</p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime="2016-12-24">{datetime}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

ReviewScreen.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  datetime: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default ReviewScreen;
