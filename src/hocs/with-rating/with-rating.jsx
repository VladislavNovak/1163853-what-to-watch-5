import React, {PureComponent} from "react";

const withRating = (Component) => {
  class WithRating extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        reviewText: ``,
        selectedStar: ``,
      };

      this._handleTextareaChange = this._handleTextareaChange.bind(this);
      this._handleStarChange = this._handleStarChange.bind(this);
    }

    _handleTextareaChange(evt) {
      this.setState({reviewText: evt.target.value});
    }

    _handleStarChange(evt) {
      this.setState({selectedStar: evt.target.value});
    }

    render() {
      return (
        <Component
          {...this.props}
          reviewText={this.state.reviewText}
          selectedStar={this.state.selectedStar}
          onTextareaChange={this._handleTextareaChange}
          onStarChange={this._handleStarChange}
        />
      );
    }
  }

  return WithRating;
};

export default withRating;
