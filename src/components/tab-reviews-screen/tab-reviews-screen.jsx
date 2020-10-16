import React from "react";
import PropTypes from "prop-types";

import ReviewScreen from "../review-screen/review-screen";


const TabReviewsScreen = ({reviews}) => {
  const leftColReviews = reviews.filter((_, index) => index % 2 === 0);
  const rightColReviews = reviews.filter((_, index) => index % 2 !== 0);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {leftColReviews.length
          ? leftColReviews.map((review, index) => (
            <ReviewScreen
              key={`${review.filmID} - ${index}`}
              quote={review.quote}
              author={review.author}
              datetime={review.datetime}
              rating={review.rating}
            />
          ))
          : ``}
      </div>
      <div className="movie-card__reviews-col">
        {rightColReviews.length
          ? rightColReviews.map((review, index) => (
            <ReviewScreen
              key={`${review.filmID} - ${index}`}
              quote={review.quote}
              author={review.author}
              datetime={review.datetime}
              rating={review.rating}
            />
          ))
          : ``}
      </div>
    </div>
  );
};

TabReviewsScreen.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default TabReviewsScreen;

// const TabReviewsScreen = ({reviews}) => {

//   if (reviews.length !== 0) {
//     const leftColReviews = reviews.filter((review, index) => index % 2 !== 0);
//     const rightColReviews = reviews.filter((review, index) => index % 2 === 0);

//     return (
//       <div className="movie-card__reviews movie-card__row">
//         <div className="movie-card__reviews-col">
//           {leftColReviews.map((review, index) => (
//             <ReviewScreen
//               key={`${review.filmID} - ${index}`}
//               quote={review.quote}
//               author={review.author}
//               datetime={review.datetime}
//               rating={review.rating}
//             />
//           ))}
//         </div>
//         <div className="movie-card__reviews-col">
//           {rightColReviews.map((review, index) => (
//             <ReviewScreen
//               key={`${review.filmID} - ${index}`}
//               quote={review.quote}
//               author={review.author}
//               datetime={review.datetime}
//               rating={review.rating}
//             />
//           ))}
//         </div>
//       </div>
//     );
//   }
// };
