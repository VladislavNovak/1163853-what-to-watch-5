import React, {PureComponent} from "react";

class AddReviewForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      reviewText: ``,
      selectedStar: ``,
    };

    this.onTextareaChangeHandler = this.onTextareaChangeHandler.bind(this);
    this.onStarChangeHandler = this.onStarChangeHandler.bind(this);
    this.onSubmitClickHandler = this.onSubmitClickHandler.bind(this);
  }

  onSubmitClickHandler(evt) {
    evt.preventDefault();
  }

  onTextareaChangeHandler(evt) {
    this.setState({reviewText: evt.target.value});
  }

  onStarChangeHandler(evt) {
    this.setState({selectedStar: evt.target.value});
  }

  render() {

    return (
      <div className="add-review">
        <form onSubmit={this.onSubmitClickHandler} action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              <input
                className="rating__input"
                id="star-1"
                type="radio"
                name="rating"
                value="1"
                checked={this.state.selectedStar === `1`}
                onChange={this.onStarChangeHandler}
              />
              <label className="rating__label" htmlFor="star-1">
                Rating 1
              </label>

              <input
                className="rating__input"
                id="star-2"
                type="radio"
                name="rating"
                value="2"
                checked={this.state.selectedStar === `2`}
                onChange={this.onStarChangeHandler}
              />
              <label className="rating__label" htmlFor="star-2">
                Rating 2
              </label>

              <input
                className="rating__input"
                id="star-3"
                type="radio"
                name="rating"
                value="3"
                checked={this.state.selectedStar === `3`}
                onChange={this.onStarChangeHandler}
              />
              <label className="rating__label" htmlFor="star-3">
                Rating 3
              </label>

              <input
                className="rating__input"
                id="star-4"
                type="radio"
                name="rating"
                value="4"
                checked={this.state.selectedStar === `4`}
                onChange={this.onStarChangeHandler}
              />
              <label className="rating__label" htmlFor="star-4">
                Rating 4
              </label>

              <input
                className="rating__input"
                id="star-5"
                type="radio"
                name="rating"
                value="5"
                checked={this.state.selectedStar === `5`}
                onChange={this.onStarChangeHandler}
              />
              <label className="rating__label" htmlFor="star-5">
                Rating 5
              </label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
              value={this.state.reviewText}
              onChange={this.onTextareaChangeHandler}
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
  }

}

export default AddReviewForm;
