import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {selectsFilteredFilms} from "../../store/reducers/app-state/selectors";
import {IsLink, LOGO_LINK_LIGHT} from "../../utils/constants";

import ButtonShowMore from "../button-show-more/button-show-more";
import ButtonPlay from "../button-play/button-play";
import ButtonAddToMylist from "../button-add-to-mylist/button-add-to-mylist";
import GenresList from "../genres-list/genres-list";
import withActiveFilm from "../../hocs/with-active-film/with-active-film";
import FilmsList from "../films-list/films-list";
import {filmPropStructure} from "../../utils/validator.prop";
import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block";

const FilmsListWrapped = withActiveFilm(FilmsList);

const Main = ({resetFilmsShown, promo, onPlayButtonClick, visibleFilmsCount, onMoreButtonClick, filteredFilms}) => {
  const {backgroundImage, title, poster, genre, released, id, inMyFavoriteList} = promo;

  const films = filteredFilms.slice(0, visibleFilmsCount);
  const isVisibleButtonShowMore = filteredFilms.length > visibleFilmsCount;

  return <React.Fragment>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={title} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <Logo />
        <UserBlock isLink={IsLink.YES} />
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={poster} alt={`${title} poster`} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>

            <div className="movie-card__buttons">
              <ButtonPlay id={id} onPlayButtonClick={onPlayButtonClick} />
              <ButtonAddToMylist id={id} inMyFavoriteList={inMyFavoriteList} />
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        {<GenresList resetFilmsShown={resetFilmsShown}/>}
        {<FilmsListWrapped films={films} />}
        {isVisibleButtonShowMore ? <ButtonShowMore onMoreButtonClick={onMoreButtonClick} /> : ``}
      </section>

      <footer className="page-footer">
        <Logo additionalClass={LOGO_LINK_LIGHT} />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </React.Fragment>;
};

Main.propTypes = {
  promo: PropTypes.shape(filmPropStructure).isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onMoreButtonClick: PropTypes.func.isRequired,
  visibleFilmsCount: PropTypes.number.isRequired,
  filteredFilms: PropTypes.arrayOf(filmPropStructure).isRequired,
  resetFilmsShown: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filteredFilms: selectsFilteredFilms(state),
});

export {Main};
export default connect(mapStateToProps)(Main);
