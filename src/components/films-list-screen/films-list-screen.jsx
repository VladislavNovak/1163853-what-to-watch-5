import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import FilmScreen from "../film-screen/film-screen";

class FilmsListScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilm: null,
    };
    this.onMouseOverFilm = this.onMouseOverFilm.bind(this);
    this.onMouseLeaveFilm = this.onMouseLeaveFilm.bind(this);
  }

  onMouseOverFilm(id) {
    this.setState({activeFilm: id});
  }

  onMouseLeaveFilm() {

    this.setState({activeFilm: null});
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film) => (
          <FilmScreen
            key={film.id}
            activeFilm={this.state.activeFilm === film.id}
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
