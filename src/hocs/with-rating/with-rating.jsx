import {CommentLength} from "../../utils/constants";
import React, {PureComponent} from "react";

const withRating = (Component) => {
  class WithRating extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        reviewText: ``,
        selectedStar: ``,
        isPostActive: false,
        isFormError: false,
        isFormLoading: false
      };

      this._handleTextareaChange = this._handleTextareaChange.bind(this);
      this._handleStarChange = this._handleStarChange.bind(this);
      this._handleErrorStatus = this._handleErrorStatus.bind(this);
      this._loadingStatus = this._loadingStatus.bind(this);
    }

    _checkingActiveStatus() {
      const {reviewText, selectedStar} = this.state;

      this.setState({
        isPostActive: Boolean(reviewText.length > CommentLength.MIN && reviewText.length < CommentLength.MAX && selectedStar)
      });
    }

    _loadingStatus(value) {
      this.setState({
        isFormLoading: value
      });
    }

    _handleErrorStatus(value) {
      this.setState({
        isFormError: value
      });
    }

    _handleTextareaChange(evt) {
      this.setState({reviewText: evt.target.value}, this._checkingActiveStatus);
    }

    _handleStarChange(evt) {
      this.setState({selectedStar: evt.target.value}, this._checkingActiveStatus);
    }

    render() {
      const {reviewText, selectedStar, isPostActive, isFormError, isFormLoading} = this.state;
      return (
        <Component
          {...this.props}
          reviewText={reviewText}
          selectedStar={selectedStar}
          onTextareaChange={this._handleTextareaChange}
          onStarChange={this._handleStarChange}
          isPostActive={isPostActive}
          onErrorStatus={this._handleErrorStatus}
          isFormError={isFormError}
          onLoadingStatus={this._loadingStatus}
          isFormLoading={isFormLoading}
        />
      );
    }
  }

  return WithRating;
};

export default withRating;
