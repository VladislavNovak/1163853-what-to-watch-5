import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import TabSwitcher from "../tab-switcher/tab-switcher";
import withChangingActiveTab from "../../hocs/with-changing-active-tab/with-changing-active-tab";
import withChangingActiveFilm from "../../hocs/with-changing-active-film/with-changing-active-film";
import FilmsList from "../films-list/films-list";

import ButtonPlay from "../button-play/button-play";
import {filmPropStructure} from "../../utils/validator.prop";

const FilmsListWrapped = withChangingActiveFilm(FilmsList);
const TabSwitcherWrapped = withChangingActiveTab(TabSwitcher);

const TabAssembler = ({film, films, handleButtonPlayClick}) => {
  const {id, title, genre, released, poster, posterBig} = film;
  const similarFilms = films.filter((item) => item.genre === film.genre && item.id !== film.id).slice(0, 4);

  return <React.Fragment>
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={poster} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>

            <div className="movie-card__buttons">
              <ButtonPlay id={id} handleButtonPlayClick={handleButtonPlayClick} />
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add" />
                </svg>
                <span>My list</span>
              </button>
              <Link to={`/films/${id}/review`} className="btn movie-card__button">Add review</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={poster} alt={`${title} poster`} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <TabSwitcherWrapped film={film} />
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        {similarFilms.length ? <FilmsListWrapped films={similarFilms} /> : `` }
      </section>
      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
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

TabAssembler.propTypes = {
  film: PropTypes.shape(filmPropStructure).isRequired,
  films: PropTypes.arrayOf(filmPropStructure).isRequired,
  // reviews: PropTypes.arrayOf(reviewPropStructure).isRequired,
  handleButtonPlayClick: PropTypes.func.isRequired,
};

export default TabAssembler;
