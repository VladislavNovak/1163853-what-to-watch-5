// import React from "react";

// import ButtonShowMore from "../button-show-more/button-show-more";
// import ButtonPlay from "../button-play/button-play";
// import GenresList from "../genres-list/genres-list";
// import withActiveFilm from "../../hocs/with-active-film/with-active-film";
// import FilmsList from "../films-list/films-list";

// const FilmsListWrapped = withActiveFilm(FilmsList);

// const Main = ({promo, handleButtonPlayClick, films, isVisibleButtonShowMore, handleMoreButtonClick}) => {
//     const {backgroundImage, title, poster, genre, released, id} = promo;

//     return <React.Fragment>
//       <section className="movie-card">
//         <div className="movie-card__bg">
//           <img src={backgroundImage} alt={title} />
//         </div>

//         <h1 className="visually-hidden">WTW</h1>

//         <header className="page-header movie-card__head">
//           <div className="logo">
//             <a className="logo__link">
//               <span className="logo__letter logo__letter--1">W</span>
//               <span className="logo__letter logo__letter--2">T</span>
//               <span className="logo__letter logo__letter--3">W</span>
//             </a>
//           </div>

//           <div className="user-block">
//             <div className="user-block__avatar">
//               <img
//                 src="img/avatar.jpg"
//                 alt="User avatar"
//                 width="63"
//                 height="63"
//               />
//             </div>
//           </div>
//         </header>

//         <div className="movie-card__wrap">
//           <div className="movie-card__info">
//             <div className="movie-card__poster">
//               <img src={poster} alt={`${title} poster`} width="218" height="327" />
//             </div>

//             <div className="movie-card__desc">
//               <h2 className="movie-card__title">{title}</h2>
//               <p className="movie-card__meta">
//                 <span className="movie-card__genre">{genre}</span>
//                 <span className="movie-card__year">{released}</span>
//               </p>

//               <div className="movie-card__buttons">
//                 <ButtonPlay id={id} handleButtonPlayClick={handleButtonPlayClick} />
//                 <button
//                   className="btn btn--list movie-card__button"
//                   type="button"
//                 >
//                   <svg viewBox="0 0 19 20" width="19" height="20">
//                     <use xlinkHref="#add" />
//                   </svg>
//                   <span>My list</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="page-content">
//         <section className="catalog">
//           <h2 className="catalog__title visually-hidden">Catalog</h2>
//           {<GenresList />}
//           {<FilmsListWrapped films={films} />}
//           {isVisibleButtonShowMore ? <ButtonShowMore handleMoreButtonClick={handleMoreButtonClick} /> : ``}
//         </section>

//         <footer className="page-footer">
//           <div className="logo">
//             <a className="logo__link logo__link--light">
//               <span className="logo__letter logo__letter--1">W</span>
//               <span className="logo__letter logo__letter--2">T</span>
//               <span className="logo__letter logo__letter--3">W</span>
//             </a>
//           </div>

//           <div className="copyright">
//             <p>© 2019 What to watch Ltd.</p>
//           </div>
//         </footer>
//       </div>
//     </React.Fragment>;
// }

// export default Main;

// -------------------------------------------------------------------

import React from "react";
import PropTypes from "prop-types";

import {connect} from "react-redux";
import {selectsActiveGenre, selectsFilteredFilms} from "../../store/reducers/app-state/selectors";
import ButtonShowMore from "../button-show-more/button-show-more";
import ButtonPlay from "../button-play/button-play";
import GenresList from "../genres-list/genres-list";
import withActiveFilm from "../../hocs/with-active-film/with-active-film";
import FilmsList from "../films-list/films-list";

import {filmPropStructure} from "../../utils/validator.prop";
import {ALL_GENRE, FILMS_COUNT_PER_CLICK} from "../../utils/constants";

const FilmsListWrapped = withActiveFilm(FilmsList);

class Main extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      visibleFilmsCount: FILMS_COUNT_PER_CLICK,
    };

    this.handleMoreButtonClick = this.handleMoreButtonClick.bind(this);
  }

  componentDidUpdate() {
    const {activeGenre} = this.props;

    if (activeGenre !== ALL_GENRE) {
      this.setState({visibleFilmsCount: FILMS_COUNT_PER_CLICK});
    }
  }

  handleMoreButtonClick(params) {
    const {visibleFilmsCount} = this.state;

    this.setState({visibleFilmsCount: visibleFilmsCount + params});
  }

  render() {

    const {promo, handleButtonPlayClick, filteredFilms} = this.props;
    const {backgroundImage, title, poster, genre, released, id} = promo;
    const {visibleFilmsCount} = this.state;

    const films = filteredFilms.slice(0, visibleFilmsCount);

    return <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={title} />
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
              <img src={poster} alt={`${title} poster`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <div className="movie-card__buttons">
                <ButtonPlay id={id} handleButtonPlayClick={handleButtonPlayClick} />
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
          {<FilmsListWrapped films={films} />}
          {filteredFilms.length > visibleFilmsCount ? <ButtonShowMore handleMoreButtonClick={this.handleMoreButtonClick} /> : ``}
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
  }
}

Main.propTypes = {
  activeGenre: PropTypes.string.isRequired,
  promo: PropTypes.shape(filmPropStructure).isRequired,
  handleButtonPlayClick: PropTypes.func.isRequired,
  filteredFilms: PropTypes.arrayOf(filmPropStructure).isRequired,
};

const mapStateToProps = (state) => ({
  filteredFilms: selectsFilteredFilms(state),
  activeGenre: selectsActiveGenre(state),
});

export {Main};
export default connect(mapStateToProps)(Main);
