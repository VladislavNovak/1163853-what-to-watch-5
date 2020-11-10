import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {selectsMyFavoriteFilms} from "../../store/reducers/app-state/selectors";

import withActiveFilm from "../../hocs/with-active-film/with-active-film";
import FilmsList from "../films-list/films-list";

const FilmsListWrapped = withActiveFilm(FilmsList);

import {filmPropStructure} from "../../utils/validator.prop";
import {JumpTo} from "../../utils/constants";

const MyFilmsList = ({myFavoriteFilms}) => {

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={JumpTo.ROOT} className="logo__link">
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
        {<FilmsListWrapped films={myFavoriteFilms} />}
      </section>

      <footer className="page-footer">
        <div className="logo">
          <Link to={JumpTo.ROOT} className="logo__link logo__link--light">
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
  myFavoriteFilms: PropTypes.arrayOf(filmPropStructure).isRequired,
};

const mapStateToProps = (state) => ({
  myFavoriteFilms: selectsMyFavoriteFilms(state),
})

export {MyFilmsList};
export default connect(mapStateToProps)(MyFilmsList);

// -------------------------------------------------------------------

// import React from "react";
// import PropTypes from "prop-types";
// import {Link} from "react-router-dom";

// import withActiveFilm from "../../hocs/with-active-film/with-active-film";
// import FilmsList from "../films-list/films-list";

// const FilmsListWrapped = withActiveFilm(FilmsList);

// import {filmPropStructure} from "../../utils/validator.prop";
// import {JumpTo} from "../../utils/constants";

// const MyFilmsList = ({films}) => {

//   return (
//     <div className="user-page">
//       <header className="page-header user-page__head">
//         <div className="logo">
//           <Link to={JumpTo.ROOT} className="logo__link">
//             <span className="logo__letter logo__letter--1">W</span>
//             <span className="logo__letter logo__letter--2">T</span>
//             <span className="logo__letter logo__letter--3">W</span>
//           </Link>
//         </div>

//         <h1 className="page-title user-page__title">My list</h1>

//         <div className="user-block">
//           <div className="user-block__avatar">
//             <img
//               src="img/avatar.jpg"
//               alt="User avatar"
//               width="63"
//               height="63"
//             />
//           </div>
//         </div>
//       </header>

//       <section className="catalog">
//         <h2 className="catalog__title visually-hidden">Catalog</h2>
//         {<FilmsListWrapped films={films} />}
//       </section>

//       <footer className="page-footer">
//         <div className="logo">
//           <Link to={JumpTo.ROOT} className="logo__link logo__link--light">
//             <span className="logo__letter logo__letter--1">W</span>
//             <span className="logo__letter logo__letter--2">T</span>
//             <span className="logo__letter logo__letter--3">W</span>
//           </Link>
//         </div>

//         <div className="copyright">
//           <p>© 2019 What to watch Ltd.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// MyFilmsList.propTypes = {
//   films: PropTypes.arrayOf(filmPropStructure).isRequired,
// };

// export default MyFilmsList;
