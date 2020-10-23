import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import withFilmsList from "../../hocs/with-films-list/with-films-list";
import Film from "../film/film";

import {filmPropStructure} from "../../utils/validator.prop";

const MyFilmsList = ({
  films,
  currentActiveFilm,
  handleMouseOverFilm,
  handleMouseLeaveFilm,
}) => {

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
            <img
              src="img/avatar.jpg"
              alt="User avatar"
              width="63"
              height="63"
            />
          </div>
        </div>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__movies-list">
          {films.map((film) => (
            <Film
              key={film.id}
              isActiveFilm={currentActiveFilm === film.id}
              id={film.id}
              poster={film.poster}
              title={film.title}
              trailer={film.trailer}
              handleMouseOverFilm={handleMouseOverFilm}
              handleMouseLeaveFilm={handleMouseLeaveFilm}
            />
          ))}
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
};

MyFilmsList.propTypes = {
  films: PropTypes.arrayOf(filmPropStructure).isRequired,
  currentActiveFilm: PropTypes.number.isRequired,
  handleMouseOverFilm: PropTypes.func.isRequired,
  handleMouseLeaveFilm: PropTypes.func.isRequired,
};

export default withFilmsList(MyFilmsList);
