import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {selectsMyFavoriteFilms} from "../../store/reducers/app-state/selectors";
import {fetchMyFavoriteFilms} from "../../store/api-action";

import withActiveFilm from "../../hocs/with-active-film/with-active-film";
import FilmsList from "../films-list/films-list";
import {filmPropStructure} from "../../utils/validator.prop";
import {WarningTypes, IsLink, JumpTo, LOGO_LINK_LIGHT} from "../../utils/constants";
import Warning from "../warning/warning";
import Logo from "../logo/logo";
import UserBlock from "../user-block/user-block";

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

          <UserBlock isLink={IsLink.NO} />
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          {myFavoriteFilms.length && <FilmsListWrapped films={myFavoriteFilms} /> || <Warning warningType={WarningTypes.EMPTY_FAVORITE_LIST} />}
        </section>

        <footer className="page-footer">
          <Logo path={JumpTo.ROOT} additionalClass={LOGO_LINK_LIGHT} />

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
  myFavoriteFilms: PropTypes.arrayOf(filmPropStructure),
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
