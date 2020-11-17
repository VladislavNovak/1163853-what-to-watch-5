import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {RATING_MULTIPLIER} from "../../utils/constants";
import {sendComment} from "../../store/api-action";

const FIVE_STARS = [1, 2, 3, 4, 5];

const AddReviewForm = ({filmId, reviewText, selectedStar, onTextareaChange, onStarChange, updateComment}) => {
  const handleSubmitCommit = (evt) => {
    evt.preventDefault();

    updateComment({
      id: filmId,
      rating: Number(selectedStar) * RATING_MULTIPLIER,
      comment: reviewText
    })
  };

  return (
    <div className="add-review">
      <form
        onSubmit={handleSubmitCommit}
        action="#"
        className="add-review__form"
      >
        <div className="rating">
          <div className="rating__stars">
            {FIVE_STARS.map((star) => (
              <React.Fragment key={star}>
                <input
                  key={`input-${star}`}
                  className="rating__input"
                  id={`star-${star}`}
                  type="radio"
                  name="rating"
                  value={`${star}`}
                  onChange={onStarChange}
                  checked={Number(selectedStar) === star}
                />
                <label key={`label-${star}`} className="rating__label" htmlFor={`star-${star}`}>
                  {`Rating ${star}`}
                </label>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            value={reviewText}
            onChange={onTextareaChange}
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

AddReviewForm.propTypes = {
  filmId: PropTypes.number.isRequired,
  selectedStar: PropTypes.string.isRequired,
  reviewText: PropTypes.string.isRequired,
  onStarChange: PropTypes.func.isRequired,
  onTextareaChange: PropTypes.func.isRequired,
  updateComment: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  updateComment(comment) {
    dispatch(sendComment(comment))
  }
});

export {AddReviewForm};
export default connect (null, mapDispatchToProps)(AddReviewForm);
