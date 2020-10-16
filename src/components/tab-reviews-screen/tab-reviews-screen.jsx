import React from "react";
// import PropTypes from "prop-types";

const TabReviewsScreen = () => {
  // const formattingList = (list) => {
  //   const slice = list.slice(0, 4);
  //   return (`${slice.join(`, `)} and other...`);
  // };

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.</p>

            <footer className="review__details">
              <cite className="review__author">Kate Muir</cite>
              <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
            </footer>
          </blockquote>

          <div className="review__rating">8,9</div>
        </div>
      </div>
    </div>
  );

};

// TabReviewsScreen.propTypes = {
//   score: PropTypes.number.isRequired,
//   level: PropTypes.string.isRequired,
//   rating: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   director: PropTypes.string.isRequired,
//   starring: PropTypes.array.isRequired,
// }

export default TabReviewsScreen;
