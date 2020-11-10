import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {filmPropStructure} from "../../utils/validator.prop";

const withActiveFilm = (Component) => {
  class WithActiveFilm extends PureComponent {
    constructor(props) {
      super(props);

      this.timerID = null;

      this.state = {
        currentActiveFilm: -1,
      };

      this._onMouseOverFilmHandler = this._onMouseOverFilmHandler.bind(this);
      this._onMouseLeaveFilmHandler = this._onMouseLeaveFilmHandler.bind(this);
    }

    _onMouseOverFilmHandler(id) {
      if (this.timerID !== null) {
        clearTimeout(this.timerID);
      }

      this.timerID = setTimeout(() => this.setState({currentActiveFilm: id}), 1000);
    }

    _onMouseLeaveFilmHandler() {
      this.setState({currentActiveFilm: -1});
      clearTimeout(this.timerID);
      this.timerID = null;
    }

    componentWillUnmount() {
      if (this.timerID) {
        clearTimeout(this.timerID);
      }
    }

    render() {

      return (
        <Component
          {...this.props}
          currentActiveFilm={this.state.currentActiveFilm}
          onMouseOverFilmHandler={this._onMouseOverFilmHandler}
          onMouseLeaveFilmHandler={this._onMouseLeaveFilmHandler}
        />
      );
    }
  }

  WithActiveFilm.propTypes = {
    films: PropTypes.arrayOf(filmPropStructure).isRequired,
  };

  return WithActiveFilm;
};

export default withActiveFilm;
