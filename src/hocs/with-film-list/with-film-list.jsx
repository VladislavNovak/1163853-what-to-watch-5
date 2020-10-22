import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {filmPropStructure} from "../../utils/validator.prop";

const withFilmList = (Component) => {
  class WithFilmList extends PureComponent {
    constructor(props) {
      super(props);

      this.timerID = null;

      this.state = {
        activeFilmID: -1,
      };

      this.handleMouseOverFilm = this.handleMouseOverFilm.bind(this);
      this.handleMouseLeaveFilm = this.handleMouseLeaveFilm.bind(this);
    }

    handleMouseOverFilm(id) {
      if (this.timerID !== null) {
        clearTimeout(this.timerID);
      }

      this.timerID = setTimeout(() => this.setState({activeFilmID: id}), 1000);
    }

    handleMouseLeaveFilm() {
      this.setState({activeFilmID: -1});
      clearTimeout(this.timerID);
      this.timerID = null;
    }

    componentWillUnmount() {
      if (this.timerID) {
        clearTimeout(this.timerID);
      }
    }

    render() {
      const {films, visibleFilmsCount} = this.props;

      const visibleFilms = films.slice(0, visibleFilmsCount);
      return (
        <Component
          {...this.props}
          films={films}
          visibleFilmsCount={visibleFilmsCount}
          visibleFilms={visibleFilms}
          activeFilmID={this.state.activeFilmID}
          handleMouseOverFilm={this.handleMouseOverFilm}
          handleMouseLeaveFilm={this.handleMouseLeaveFilm}
        />
      );
    }
  }

  WithFilmList.propTypes = {
    films: PropTypes.arrayOf(filmPropStructure).isRequired,
    visibleFilmsCount: PropTypes.number.isRequired,
  };

  return WithFilmList;
};

export default withFilmList;
