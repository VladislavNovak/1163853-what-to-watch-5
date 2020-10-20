import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import FilmsListScreen from "../films-list-screen/films-list-screen";
import GenresListScreen from "../genres-list-screen/genres-list-screen";

import {filmPropStructure} from "../../utils/validator.prop";

const MainScreen = ({poster, filteredFilms}) => {

  return <React.Fragment>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={poster.posterBig} alt={poster.title} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="user-block">
          <div className="user-block__avatar">
            <img
              src="img/avatar.jpg"
              alt="User avatar"
              width="63"
              height="63"
            />
          </div>
        </div>
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={poster.poster} alt={`${poster.title} poster`} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{poster.title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{poster.genre}</span>
              <span className="movie-card__year">{poster.released}</span>
            </p>

            <div className="movie-card__buttons">
              <button
                className="btn btn--play movie-card__button"
                type="button"
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s" />
                </svg>
                <span>Play</span>
              </button>
              <button
                className="btn btn--list movie-card__button"
                type="button"
              >
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add" />
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        {<GenresListScreen />}
        {<FilmsListScreen films={filteredFilms} />}

        <div className="catalog__more">
          <button className="catalog__button" type="button">
            Show more
          </button>
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </React.Fragment>;
};

MainScreen.propTypes = {
  poster: PropTypes.shape(filmPropStructure).isRequired,
  filteredFilms: PropTypes.arrayOf(filmPropStructure).isRequired,
};

const mapStateToProps = ({filteredFilms}) => ({filteredFilms});

export {MainScreen};
export default connect(mapStateToProps)(MainScreen);
