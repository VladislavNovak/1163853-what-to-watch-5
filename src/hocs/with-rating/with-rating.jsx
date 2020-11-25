import {CommentLength} from "../../utils/constants";
import React, {PureComponent} from "react";

const withRating = (Component) => {
  class WithRating extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        reviewText: ``,
        selectedStar: ``,
        isActive: false,
        isError: false,
        isLoading: false
      };

      this._handleTextareaChange = this._handleTextareaChange.bind(this);
      this._handleStarChange = this._handleStarChange.bind(this);
      this._handleErrorStatus = this._handleErrorStatus.bind(this);
      this._handleLoadingStatus = this._handleLoadingStatus.bind(this);
    }

    _checkingActiveStatus() {
      const {reviewText, selectedStar} = this.state;

      this.setState({
        isActive: Boolean(reviewText.length > CommentLength.MIN && reviewText.length < CommentLength.MAX && selectedStar)
      });
    }

    _handleLoadingStatus(arg) {
      this.setState({
        isLoading: arg
      });
    }

    _handleErrorStatus(arg) {
      this.setState({
        isError: arg
      });
    }

    _handleTextareaChange(evt) {
      this.setState({reviewText: evt.target.value}, this._checkingActiveStatus);
    }

    _handleStarChange(evt) {
      this.setState({selectedStar: evt.target.value}, this._checkingActiveStatus);
    }

    render() {
      const {reviewText, selectedStar, isActive, isError, isLoading} = this.state;
      return (
        <Component
          {...this.props}
          reviewText={reviewText}
          selectedStar={selectedStar}
          onTextareaChange={this._handleTextareaChange}
          onStarChange={this._handleStarChange}
          isActive={isActive}
          onErrorStatus={this._handleErrorStatus}
          isError={isError}
          onLoadingStatus={this._handleLoadingStatus}
          isLoading={isLoading}
        />
      );
    }
  }

  return WithRating;
};

export default withRating;
