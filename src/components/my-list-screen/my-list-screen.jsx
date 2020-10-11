import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import FilmScreen from "../film-screen/film-screen";

class MyListScreen extends PureComponent {
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
    const {favoriteFilms} = this.props;

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <h1 className="page-title user-page__title">My list</h1>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <div className="catalog__movies-list">
            {favoriteFilms.map((film) => <FilmScreen key={film.id} id={film.id} poster={film.poster} title={film.title} onFilmOverHandler={this.onFilmOverHandler} onFilmLeaveHandler={this.onFilmLeaveHandler} />)}
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    );
  }
}

MyListScreen.propTypes = {
  favoriteFilms: PropTypes.array.isRequired,
};

export default MyListScreen;
