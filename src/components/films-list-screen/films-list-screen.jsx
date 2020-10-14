import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import FilmScreen from "../film-screen/film-screen";

class FilmsListScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.timerID = null;

    this.state = {
      activeFilmID: -1,
      isRunPreview: false,
    };

    this.onMouseOverFilm = this.onMouseOverFilm.bind(this);
    this.onMouseLeaveFilm = this.onMouseLeaveFilm.bind(this);
  }

  onMouseOverFilm(id) {
    this.setState({activeFilmID: id});

    this.timerID = setTimeout(() => this.setState({isRunPreview: true}), 1000);
  }

  onMouseLeaveFilm() {
    this.setState({activeFilmID: -1});

    this.setState({isRunPreview: false});
    clearTimeout(this.timerID);
    this.timerID = null;
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film) => (
          <FilmScreen
            key={film.id}
            isActiveFilm={this.state.activeFilmID === film.id}
            isRunPreview={this.state.isRunPreview}
            id={film.id}
            poster={film.poster}
            title={film.title}
            trailer={film.trailer}
            onMouseOverFilm={this.onMouseOverFilm}
            onMouseLeaveFilm={this.onMouseLeaveFilm}
          />
        ))}
      </div>
    );
  }
}

FilmsListScreen.propTypes = {
  films: PropTypes.array.isRequired,
};

export default FilmsListScreen;
