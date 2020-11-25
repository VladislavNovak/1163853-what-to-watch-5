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
      };

      this._handleTextareaChange = this._handleTextareaChange.bind(this);
      this._handleStarChange = this._handleStarChange.bind(this);
    }

    _checkingActiveStatus() {
      const {reviewText, selectedStar} = this.state;

      this.setState({
        isActive: Boolean(reviewText.length > CommentLength.MIN && reviewText.length < CommentLength.MAX && selectedStar)
      });
    }

    _handleTextareaChange(evt) {
      this.setState({reviewText: evt.target.value}, this._checkingActiveStatus);
    }

    _handleStarChange(evt) {
      this.setState({selectedStar: evt.target.value}, this._checkingActiveStatus);
    }

    render() {
      const {reviewText, selectedStar, isActive} = this.state;
      return (
        <Component
          {...this.props}
          reviewText={reviewText}
          selectedStar={selectedStar}
          onTextareaChange={this._handleTextareaChange}
          onStarChange={this._handleStarChange}
          isActive={isActive}
        />
      );
    }
  }

  return WithRating;
};

export default withRating;
