import React from "react";
import PropTypes from "prop-types";
import withAddReviewForm from "../../hocs/with-add-review-form/with-add-review-form";

const FIVE_STARS = [1, 2, 3, 4, 5];

const AddReviewForm = ({onSubmitClickHandler, selectedStar, onStarChangeHandler, reviewText, onTextareaChangeHandler}) => {

  return (
    <div className="add-review">
      <form
        onSubmit={onSubmitClickHandler}
        action="#"
        className="add-review__form"
      >
        <div className="rating">
          <div className="rating__stars">
            {FIVE_STARS.map((star) => (
              <React.Fragment key={star}>
                <input
                  className="rating__input"
                  id={`star-${star}`}
                  type="radio"
                  name="rating"
                  value={`${star}`}
                  checked={selectedStar === star}
                  onChange={onStarChangeHandler}
                />
                <label
                  className="rating__label"
                  htmlFor={`star-${star}`}
                >
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
  onSubmitClickHandler: PropTypes.func.isRequired,
  onStarChangeHandler: PropTypes.func.isRequired,
  onTextareaChangeHandler: PropTypes.func.isRequired,
};

export default withAddReviewForm(AddReviewForm);
