import React from "react";
import PropTypes from "prop-types";

import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {selectsFilteredFilms, selectsVisibleFilmsCount} from "../../store/reducers/app-state/selectors";
import ButtonShowMore from "../button-show-more/button-show-more";
import ButtonPlay from "../button-play/button-play";
import GenresList from "../genres-list/genres-list";
import withChangingActiveFilm from "../../hocs/with-changing-active-film/with-changing-active-film";
import FilmsList from "../films-list/films-list";

import {filmPropStructure} from "../../utils/validator.prop";

const FilmsListWrapped = withChangingActiveFilm(FilmsList);

const Main = ({promo, handleButtonPlayClick, filteredFilms, visibleFilmsCount, handleMoreButtonClick}) => {

  return <React.Fragment>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={promo.backgroundImage} alt={promo.title} />
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
            <img src={promo.poster} alt={`${promo.title} poster`} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{promo.title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{promo.genre}</span>
              <span className="movie-card__year">{promo.released}</span>
            </p>

            <div className="movie-card__buttons">
              <ButtonPlay id={promo.id} handleButtonPlayClick={handleButtonPlayClick} />
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
        {<GenresList />}
        {<FilmsListWrapped films={filteredFilms} />}
        {filteredFilms.length > visibleFilmsCount ? <ButtonShowMore handleMoreButtonClick={handleMoreButtonClick} /> : ``}
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

Main.propTypes = {
  promo: PropTypes.shape(filmPropStructure).isRequired,
  handleButtonPlayClick: PropTypes.func.isRequired,
  filteredFilms: PropTypes.arrayOf(filmPropStructure).isRequired,
  visibleFilmsCount: PropTypes.number.isRequired,
  handleMoreButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filteredFilms: selectsFilteredFilms(state),
  visibleFilmsCount: selectsVisibleFilmsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleMoreButtonClick(filmsCountPerClick) {
    dispatch(ActionCreator.addNewVisibleFilms(filmsCountPerClick));
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
