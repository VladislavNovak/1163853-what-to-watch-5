import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import MainScreen from "../main-screen/main-screen";
import SignInScreen from "../sign-in-screen/sign-in-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import OverviewScreen from "../overview-screen/overview-screen";
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
        <Route exact path="/login" component={SignInScreen} />
        <Route exact path="/mylist" component={MyListScreen} />
        <Route exact path="/films/:id"
          render={({match}) => {
            const id = match.params.id;
            const film = props.films.find((item) => item.id === parseInt(id, 10));
            return <OverviewScreen film={film} />;
          }}
        />
        <Route exact path="/films/:id/review"
          render={({match}) => {
            const id = match.params.id;
            const film = props.films.find((item) => item.id === parseInt(id, 10));
            return <AddReviewScreen film={film} />
          }}
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
