import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import FilmScreen from "../film-screen/film-screen";

import {filmPropStructure} from "../../utils/validator.prop";

class FilmsListScreen extends PureComponent {
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
    const {films} = this.props;

    return (
      <div className={`catalog__movies-list`}>
        {films.map((film) => (
          <FilmScreen
            key={film.id}
            isActiveFilm={this.state.activeFilmID === film.id}
            id={film.id}
            poster={film.poster}
            title={film.title}
            trailer={film.trailer}
            handleMouseOverFilm={this.handleMouseOverFilm}
            handleMouseLeaveFilm={this.handleMouseLeaveFilm}
          />
        ))}
      </div>
    );
  }
}

FilmsListScreen.propTypes = {
  films: PropTypes.arrayOf(filmPropStructure).isRequired,
};

export default FilmsListScreen;

