import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyFilmsList from "../my-films-list/my-films-list";
import AddReview from "../add-review/add-review";
import TabAssembler from "../tab-assembler/tab-assembler";
import Player from "../player/player";
import withPlayer from "../../hocs/with-player/with-player";

import {filmPropStructure, reviewPropStructure} from "../../utils/validator.prop";

// isFavoriteType: CHECKED/UNCHECKED
// getMatchingFilm: находит в списке фильмов (props.films) сответствие в (match.params.id) и возвращает один найденный объект
// filterFavoriteFilms: фильтрует список фильмов (props.films) по соответствию true/false (isFavoriteType) и возвращает массив объектов
import {isFavoriteType, getMatchingFilm, getMatchingReview, filterFavoriteFilms} from "../../utils/utils";

// const PlayerWrapped = withPlayer(Player)

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={({history}) => (
            <Main
              films={props.films}
              handleButtonPlayClick={(id) => history.push(`/player/${id}`)}
            />
          )}
        ></Route>
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/mylist">
          <MyFilmsList
            films={filterFavoriteFilms(props.films, isFavoriteType.CHECKED)}
          />
        </Route>
        <Route
          exact
          path="/films/:id"
          render={({match, history}) => (
            <TabAssembler
              film={getMatchingFilm(props.films, match)}
              films={props.films}
              reviews={getMatchingReview(props.reviews, match)}
              handleButtonPlayClick={(id) => history.push(`/player/${id}`)}
            />
          )}
        />
        <Route
          exact
          path="/films/:id/review"
          render={({match}) => (
            <AddReview film={getMatchingFilm(props.films, match)} />
          )}
        />
        <Route exact path="/player/:id" component={Player} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(filmPropStructure).isRequired,
  reviews: PropTypes.arrayOf(reviewPropStructure).isRequired,
};

export default App;
