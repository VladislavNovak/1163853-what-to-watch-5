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

      this._handleMoreButtonClick = this._handleMoreButtonClick.bind(this);
      this._handleResetFilmsShown = this._handleResetFilmsShown.bind(this);
    }

    _handleResetFilmsShown() {
      this.setState({visibleFilmsCount: FILMS_COUNT_PER_CLICK});
    }

    _handleMoreButtonClick(showMoreForViewing) {
      const {visibleFilmsCount} = this.state;

      this.setState({visibleFilmsCount: visibleFilmsCount + showMoreForViewing});
    }

    render() {
      const {promo, onPlayButtonClick} = this.props;
      const {visibleFilmsCount} = this.state;

      return (
        <Component
          {...this.props}
          promo={promo}
          onPlayButtonClick={onPlayButtonClick}
          visibleFilmsCount={visibleFilmsCount}
          onMoreButtonClick={this._handleMoreButtonClick}
          resetFilmsShown = {this._handleResetFilmsShown}
        />
      );
    }
  }

  WithVisibleFilms.propTypes = {
    promo: PropTypes.shape(filmPropStructure).isRequired,
    onPlayButtonClick: PropTypes.func.isRequired,
  };

  return WithVisibleFilms;
};

export default withVisibleFilms;
