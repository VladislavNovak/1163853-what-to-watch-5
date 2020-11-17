import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import TabSwitcher from "../tab-switcher/tab-switcher";
import withActiveTab from "../../hocs/with-active-tab/with-active-tab";
import withActiveFilm from "../../hocs/with-active-film/with-active-film";
import FilmsList from "../films-list/films-list";
import {selectsActiveFilm} from "../../store/reducers/app-state/selectors";
import ButtonPlay from "../button-play/button-play";
import {filmPropStructure} from "../../utils/validator.prop";
import {fetchActiveFilm} from "../../store/api-action";

import {connect} from "react-redux";
import {ClassName, IsLink, JumpTo, SIMILAR_FILMS} from "../../utils/constants";
import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block";
import ButtonAddToMylist from "../button-add-to-mylist/button-add-to-mylist";

const FilmsListWrapped = withActiveFilm(FilmsList);
const TabSwitcherWrapped = withActiveTab(TabSwitcher);

class TabAssembler extends PureComponent {

  componentDidMount() {
    const {getActiveFilm, id} = this.props;

    getActiveFilm(id);
  }

  componentDidUpdate(prevProps) {
    const {getActiveFilm, id} = this.props;

    if (this.props.id !== prevProps.id) {
      getActiveFilm(id);
    }
  }

  render() {
    if (!this.props.film) {
      return null;
    }

    const {film, films, onPlayButtonClick} = this.props;

    const {id, inMyFavoriteList, title, genre, released, poster, backgroundImage, backgroundColor} = film;
    const similarFilms = films.filter((item) => item.genre === film.genre && item.id !== film.id).slice(0, SIMILAR_FILMS);

    return <React.Fragment>
      <section className="movie-card movie-card--full" style={{backgroundColor}} >
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <Logo path={JumpTo.ROOT} />
            <UserBlock isLink={IsLink.YES} />
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <div className="movie-card__buttons">
                <ButtonPlay id={id} onPlayButtonClick={onPlayButtonClick} />
                <ButtonAddToMylist id={id} inMyFavoriteList={inMyFavoriteList} />
                <Link to={`${JumpTo.FILMS}${id}${JumpTo.REVIEW}`} className="btn movie-card__button">Add review</Link>
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
          <Logo path={JumpTo.ROOT} additionalClass={ClassName.FOOTER_LINK} />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>;
  }
}

TabAssembler.propTypes = {
  id: PropTypes.number.isRequired,
  getActiveFilm: PropTypes.func.isRequired,
  film: PropTypes.shape(filmPropStructure),
  films: PropTypes.arrayOf(filmPropStructure).isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({film: selectsActiveFilm(state)});

const mapDispatchToProps = (dispatch) => ({
  getActiveFilm(id) {
    dispatch(fetchActiveFilm(id));
  }
});

export {TabAssembler};
export default connect(mapStateToProps, mapDispatchToProps)(TabAssembler);
