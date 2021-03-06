import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import withChangingActiveFilm from "../../hocs/with-changing-active-film/with-changing-active-film";
import FilmsList from "../films-list/films-list";

const FilmsListWrapped = withChangingActiveFilm(FilmsList);

import {filmPropStructure} from "../../utils/validator.prop";

const MyFilmsList = ({films}) => {

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
        {<FilmsListWrapped films={films} />}
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
};

export default MyFilmsList;
