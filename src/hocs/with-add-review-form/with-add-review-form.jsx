import React, {PureComponent} from "react";

const withAddReviewForm = (Component) => {
  class WithAddReviewForm extends PureComponent {
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
        <Component
          {...this.props}
          reviewText={this.state.reviewText}
          selectedStar={this.state.selectedStar}
          onSubmitClickHandler={this.onSubmitClickHandler}
          onTextareaChangeHandler={this.onTextareaChangeHandler}
          onStarChangeHandler={this.onStarChangeHandler}
        />
      );
    }
  }

  return WithAddReviewForm;
};

export default withAddReviewForm;
