import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {selectsFilms, selectsPromo} from "../../store/reducers/app-state/selectors";
import browserHistory from "../../browser-history";
import Main from "../main/main";
import withVisibleFilms from "../../hocs/with-visible-films/with-visible-films";
import withAuth from "../../hocs/with-auth/with-auth";
import SignIn from "../sign-in/sign-in";
import MyFilmsList from "../my-films-list/my-films-list";
import AddReview from "../add-review/add-review";
import TabAssembler from "../tab-assembler/tab-assembler";
import Player from "../player/player";
import withPlayer from "../../hocs/with-player/with-player";
import PrivateRoute from "../private-route/private-route";
import {filmPropStructure} from "../../utils/validator.prop";

// isFavoriteType: CHECKED/UNCHECKED
// getMatchingFilm: находит в списке фильмов (props.films) сответствие в (match.params.id) и возвращает один найденный объект
// filterFavoriteFilms: фильтрует список фильмов (props.films) по соответствию true/false (isFavoriteType) и возвращает массив объектов
import {JumpTo} from "../../utils/constants";
import {getMatchingFilm} from "../../utils/utils";

const PlayerWrapped = withPlayer(Player);
const MainWrapped = withVisibleFilms(Main);
const SignInWrapped = withAuth(SignIn);

const App = ({films, promo}) => {

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route
          exact
          path={JumpTo.ROOT}
          render={({history}) => (
            <MainWrapped
              promo={promo}
              onPlayButtonClick={(id) => history.push(JumpTo.PLAYER + id)}
            />
          )} >
        </Route>
        <Route
          exact
          path={JumpTo.LOGIN} >
          <SignInWrapped />
        </Route>
        <PrivateRoute
          exact
          path={JumpTo.MYLIST}
          render={() => (<MyFilmsList />)}
        />
        <Route
          exact
          path={JumpTo.FILMS_ID_URL}
          render={({match, history}) => (
            <TabAssembler
              id={Number(match.params.id)}
              films={films}
              onPlayButtonClick={(id) => history.push(JumpTo.PLAYER + id)}
            />
          )}
        />
        <PrivateRoute
          exact
          path={JumpTo.REVIEW_ID_URL}
          render={({match}) => (
            <AddReview film={getMatchingFilm(films, match)} />
          )}
        />
        <Route
          exact
          path={JumpTo.PLAYER_ID_URL}
          render={({match, history}) => (
            <PlayerWrapped
              film={getMatchingFilm(films, match)}
              onPlayerExitClick={() => history.goBack()}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(filmPropStructure).isRequired,
  promo: PropTypes.shape(filmPropStructure).isRequired,
};

const mapStateToProps = (state) => ({
  films: selectsFilms(state),
  promo: selectsPromo(state),
});

export {App};
export default connect(mapStateToProps)(App);
