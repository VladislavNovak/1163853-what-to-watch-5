import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import MainScreen from "../main-screen/main-screen";
import SignInScreen from "../sign-in-screen/sign-in-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import TabAssemblerScreen from "../tab-assembler-screen/tab-assembler-screen";
import PlayerScreen from "../player-screen/player-screen";

import {filmPropStructure, reviewPropStructure, genrePropStructure} from "../../utils/validator.prop";

// isFavoriteType: CHECKED/UNCHECKED
// getMatchingFilm: находит в списке фильмов (props.films) сответствие в (match.params.id) и возвращает один найденный объект
// filterFavoriteFilms: фильтрует список фильмов (props.films) по соответствию true/false (isFavoriteType) и возвращает массив объектов
import {isFavoriteType, getMatchingFilm, getMatchingReview, filterFavoriteFilms} from "../../utils/utils";

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
          render={({match}) => <TabAssemblerScreen film={getMatchingFilm(props.films, match)} films={props.films} reviews={getMatchingReview(props.reviews, match)} />}
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
  poster: PropTypes.shape(filmPropStructure).isRequired,
  films: PropTypes.arrayOf(filmPropStructure).isRequired,
  genre: PropTypes.shape(genrePropStructure).isRequired,
  reviews: PropTypes.arrayOf(reviewPropStructure).isRequired,
};

export default App;
