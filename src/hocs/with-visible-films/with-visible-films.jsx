import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {FILMS_COUNT_PER_CLICK} from "../../utils/constants";
import {filmPropStructure} from "../../utils/validator.prop";

const withVisibleFilms = (Component) => {
  class WithVisibleFilms extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        visibleFilmsCount: FILMS_COUNT_PER_CLICK,
      };

      this._onMoreButtonClickHandler = this._onMoreButtonClickHandler.bind(this);
      this.resetVisible = this.resetVisible.bind(this);
    }

    resetVisible() {
      this.setState({visibleFilmsCount: FILMS_COUNT_PER_CLICK});
    }

    _onMoreButtonClickHandler(showMoreForViewing) {
      const {visibleFilmsCount} = this.state;

      this.setState({visibleFilmsCount: visibleFilmsCount + showMoreForViewing});
    }

    render() {
      const {promo, onPlayButtonClickHandler} = this.props;
      const {visibleFilmsCount} = this.state;

      return (
        <Component
          {...this.props}
          promo={promo}
          onPlayButtonClickHandler={onPlayButtonClickHandler}
          visibleFilmsCount={visibleFilmsCount}
          onMoreButtonClickHandler={this._onMoreButtonClickHandler}
          resetVisible = {this.resetVisible}
        />
      );
    }
  }

  WithVisibleFilms.propTypes = {
    promo: PropTypes.shape(filmPropStructure).isRequired,
    onPlayButtonClickHandler: PropTypes.func.isRequired,
  };

  return WithVisibleFilms;
};

export default withVisibleFilms;
