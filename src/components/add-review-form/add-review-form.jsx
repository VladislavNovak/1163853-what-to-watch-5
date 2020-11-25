import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {sendComment} from "../../store/api-action";
import Warning from "../warning/warning";
import {WarningTypes} from "../../utils/constants";

const RAITING = [2, 4, 6, 8, 10];

const AddReviewForm = ({
  filmId,
  reviewText,
  selectedStar,
  onTextareaChange,
  onStarChange,
  updateComment,
  isPostActive,
  onErrorStatus,
  isFormError,
  onLoadingStatus,
  isFormLoading
}) => {

  const handleSubmitCommit = (evt) => {
    evt.preventDefault();

    onLoadingStatus(true);

    updateComment({
      id: filmId,
      rating: Number(selectedStar),
      comment: reviewText
    })
    .catch(() => {
      onErrorStatus(true);
      onLoadingStatus(true);
    });
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
            {RAITING.map((star) => (
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
            <button className="add-review__btn" type="submit" disabled={!isPostActive || isFormLoading}>
              Post
            </button>
          </div>
        </div>
        {isFormError && <Warning warningType={WarningTypes.ERROR_SENDING_TO_SERVER} />}
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
  isPostActive: PropTypes.bool.isRequired,
  onErrorStatus: PropTypes.func.isRequired,
  isFormError: PropTypes.bool.isRequired,
  onLoadingStatus: PropTypes.func.isRequired,
  isFormLoading: PropTypes.bool.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  updateComment(comment) {
    return dispatch(sendComment(comment));
  }
});

export {AddReviewForm};
export default connect(null, mapDispatchToProps)(AddReviewForm);
