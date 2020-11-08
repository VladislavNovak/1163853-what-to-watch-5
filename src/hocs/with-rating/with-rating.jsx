import React, {PureComponent} from "react";

const withRating = (Component) => {
  class WithRating extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        reviewText: ``,
        selectedStar: ``,
      };

      this._onTextareaChangeHandler = this._onTextareaChangeHandler.bind(this);
      this._onStarChangeHandler = this._onStarChangeHandler.bind(this);
      this._onSubmitClickHandler = this._onSubmitClickHandler.bind(this);
    }

    _onSubmitClickHandler(evt) {
      evt.preventDefault();
    }

    _onTextareaChangeHandler(evt) {
      this.setState({reviewText: evt.target.value});
    }

    _onStarChangeHandler(evt) {
      this.setState({selectedStar: evt.target.value});
    }

    render() {
      return (
        <Component
          {...this.props}
          reviewText={this.state.reviewText}
          selectedStar={this.state.selectedStar}
          onSubmitClickHandler={this._onSubmitClickHandler}
          onTextareaChangeHandler={this._onTextareaChangeHandler}
          onStarChangeHandler={this._onStarChangeHandler}
        />
      );
    }
  }

  return WithRating;
};

export default withRating;
