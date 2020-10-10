import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import FilmScreen from "../film-screen/film-screen";

class FilmsListScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {currentActiveFilm: null};
    this.onFilmOverHandler = this.onFilmOverHandler.bind(this);
    this.onFilmLeaveHandler = this.onFilmLeaveHandler.bind(this);
  }

  onFilmOverHandler(id) {
    this.setState({currentActiveFilm: id});
  }

  onFilmLeaveHandler() {
    this.setState({currentActiveFilm: null});
  }

  render() {
    const films = this.props.films;

    return (
      <div className="catalog__movies-list">
        {films.map((film) => <FilmScreen key={film.id} id={film.id} poster={film.poster} title={film.title} onFilmOverHandler={this.onFilmOverHandler} onFilmLeaveHandler={this.onFilmLeaveHandler} />)}
      </div>
    );
  }
}

FilmsListScreen.propTypes = {
  films: PropTypes.array.isRequired,
};

export default FilmsListScreen;
