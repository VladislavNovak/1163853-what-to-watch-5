import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import MainScreen from "../main-screen/main-screen";
import SignInScreen from "../sign-in-screen/sign-in-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import PageAssembledScreen from "../page-assembled-screen/page-assembled-screen";
import PlayerScreen from "../player-screen/player-screen";

// isFavoriteType: CHECKED/UNCHECKED
// getMatchingFilm: находит в списке фильмов (props.films) сответствие в (match.params.id) и возвращает один найденный объект
// filterFavoriteFilms: фильтрует список фильмов (props.films) по соответствию true/false (isFavoriteType) и возвращает массив объектов
import {isFavoriteType, getMatchingFilm, filterFavoriteFilms} from "../../utils/utils";

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen
            poster={props.poster}
            films={props.films}
            genre={props.genre}
          />
        </Route>
        <Route exact path="/login" component={SignInScreen} />
        <Route exact path="/mylist">
          < MyListScreen
            favoriteFilms={filterFavoriteFilms(props.films, isFavoriteType.CHECKED)}
          />
        </Route>
        <Route exact path="/films/:id"
          render={({match}) => <PageAssembledScreen film={getMatchingFilm(props.films, match)} />}
        />
        <Route exact path="/films/:id/review"
          render={({match}) => <AddReviewScreen film={getMatchingFilm(props.films, match)} />}
        />
        <Route exact path="/player/:id" component={PlayerScreen} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  poster: PropTypes.object.isRequired,
  films: PropTypes.array.isRequired,
  genre: PropTypes.object.isRequired,
};

export default App;
