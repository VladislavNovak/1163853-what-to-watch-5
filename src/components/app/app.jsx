import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import MainScreen from "../main-screen/main-screen";
import SignInScreen from "../sign-in-screen/sign-in-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import MovieScreen from "../movie-screen/movie-screen";
import PlayerScreen from "../player-screen/player-screen";

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
        <Route exact path="/login">
          <SignInScreen />
        </Route>
        <Route exact path="/mylist">
          <MyListScreen />
        </Route>
        <Route exact path="/films/:id">
          <MovieScreen />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReviewScreen />
        </Route>
        <Route exact path="/player/:id">
          <PlayerScreen />
        </Route>
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
