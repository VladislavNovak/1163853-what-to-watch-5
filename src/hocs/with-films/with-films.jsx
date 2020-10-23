import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {filmPropStructure} from "../../utils/validator.prop";

const withFilms = (Component) => {
  class WithFilms extends PureComponent {
    constructor(props) {
      super(props);

      this.timerID = null;

      this.state = {
        currentActiveFilm: -1,
      };

      this.handleMouseOverFilm = this.handleMouseOverFilm.bind(this);
      this.handleMouseLeaveFilm = this.handleMouseLeaveFilm.bind(this);
    }

    handleMouseOverFilm(id) {
      if (this.timerID !== null) {
        clearTimeout(this.timerID);
      }

      this.timerID = setTimeout(() => this.setState({currentActiveFilm: id}), 1000);
    }

    handleMouseLeaveFilm() {
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
      const {films} = this.props;

      return (
        <Component
          {...this.props}
          films={films}
          currentActiveFilm={this.state.currentActiveFilm}
          handleMouseOverFilm={this.handleMouseOverFilm}
          handleMouseLeaveFilm={this.handleMouseLeaveFilm}
        />
      );
    }
  }

  WithFilms.propTypes = {
    films: PropTypes.arrayOf(filmPropStructure).isRequired,
  };

  return WithFilms;
};

export default withFilms;
