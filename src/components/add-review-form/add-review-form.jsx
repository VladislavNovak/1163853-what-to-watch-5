import React from "react";
import PropTypes from "prop-types";

const FIVE_STARS = [1, 2, 3, 4, 5];

const AddReviewForm = ({
  reviewText,
  selectedStar,
  onSubmitFieldClickHandler,
  onTextareaChangeHandler,
  onStarChangeHandler,
}) => {
  return (
    <div className="add-review">
      <form
        onSubmit={onSubmitFieldClickHandler}
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
                  onChange={onStarChangeHandler}
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
            onChange={onTextareaChangeHandler}
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
  selectedStar: PropTypes.string.isRequired,
  reviewText: PropTypes.string.isRequired,
  onSubmitFieldClickHandler: PropTypes.func.isRequired,
  onStarChangeHandler: PropTypes.func.isRequired,
  onTextareaChangeHandler: PropTypes.func.isRequired,
};

export default AddReviewForm;
