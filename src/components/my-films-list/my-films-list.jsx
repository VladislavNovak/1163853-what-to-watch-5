import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {selectsMyFavoriteFilms} from "../../store/reducers/app-state/selectors";
import {fetchMyFavoriteFilms} from "../../store/api-action";

import withActiveFilm from "../../hocs/with-active-film/with-active-film";
import FilmsList from "../films-list/films-list";
import {filmPropStructure} from "../../utils/validator.prop";
import {ClassName, JumpTo} from "../../utils/constants";
import Preloader from "../preloader/preloader";
import Logo from "../logo/logo";
import {UserBlock} from "../user-block/user-block";

const FilmsListWrapped = withActiveFilm(FilmsList);

class MyFilmsList extends PureComponent {

  componentDidMount() {
    const {loadMyFavoriteFilms} = this.props;

    loadMyFavoriteFilms();
  }

  render() {
    const {myFavoriteFilms} = this.props;

    return (

      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo path={JumpTo.ROOT} />

          <h1 className="page-title user-page__title">My list</h1>

          <UserBlock />

          {/* <div className="user-block">
            <div className="user-block__avatar">
              <img
                src="img/avatar.jpg"
                alt="User avatar"
                width="63"
                height="63"
              />
            </div>
          </div> */}
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          {!myFavoriteFilms.length ? (<Preloader />) : (<FilmsListWrapped films={myFavoriteFilms} />)}
        </section>

        <footer className="page-footer">
          <Logo path={JumpTo.ROOT} additionalClass={ClassName.FOOTER_LINK} />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    );
  }
}

MyFilmsList.propTypes = {
  loadMyFavoriteFilms: PropTypes.func.isRequired,
  myFavoriteFilms: PropTypes.arrayOf(filmPropStructure).isRequired,
};

const mapStateToProps = (state) => ({
  myFavoriteFilms: selectsMyFavoriteFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadMyFavoriteFilms() {
    dispatch(fetchMyFavoriteFilms());
  }
});

export {MyFilmsList};
export default connect(mapStateToProps, mapDispatchToProps)(MyFilmsList);
