// import React from "react";
// import PropTypes from "prop-types";
// import {Switch, Route, BrowserRouter} from "react-router-dom";
// import {connect} from "react-redux";
// import {selectsFilms, selectsPromo} from "../../store/reducers/app-state/selectors";
// import Main from "../main/main";
// import SignIn from "../sign-in/sign-in";
// import MyFilmsList from "../my-films-list/my-films-list";
// import AddReview from "../add-review/add-review";
// import TabAssembler from "../tab-assembler/tab-assembler";
// import Player from "../player/player";
// import withPlayer from "../../hocs/with-player/with-player";

// import {filmPropStructure} from "../../utils/validator.prop";

// // isFavoriteType: CHECKED/UNCHECKED
// // getMatchingFilm: находит в списке фильмов (props.films) сответствие в (match.params.id) и возвращает один найденный объект
// // filterFavoriteFilms: фильтрует список фильмов (props.films) по соответствию true/false (isFavoriteType) и возвращает массив объектов
// import {isFavoriteType} from "../../utils/constants";
// import {getMatchingFilm, filterFavoriteFilms} from "../../utils/utils";

// const PlayerWrapped = withPlayer(Player);

// const App = ({films, promo}) => {

//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route
//           exact
//           path="/"
//           render={({history}) => (
//             <Main
//               promo={promo}
//               handleButtonPlayClick={(id) => history.push(`/player/${id}`)}
//             />
//           )}
//         >
//         </Route>
//         <Route exact path="/login" component={SignIn} />
//         <Route exact path="/mylist">
//           <MyFilmsList
//             films={filterFavoriteFilms(films, isFavoriteType.CHECKED)}
//           />
//         </Route>
//         <Route
//           exact
//           path="/films/:id"
//           render={({match, history}) => (
//             <TabAssembler
//               // film={getMatchingFilm(films, match)}
//               id={Number(match.params.id)}
//               films={films}
//               handleButtonPlayClick={(id) => history.push(`/player/${id}`)}
//             />
//           )}
//         />
//         <Route
//           exact
//           path="/films/:id/review"
//           render={({match}) => (
//             <AddReview film={getMatchingFilm(films, match)} />
//           )}
//         />
//         <Route
//           exact
//           path="/player/:id"
//           render={({match, history}) => (
//             <PlayerWrapped
//               film={getMatchingFilm(films, match)}
//               handlePlayerExitClick={() => history.goBack()}
//             />
//           )}
//         />
//       </Switch>
//     </BrowserRouter>
//   );
// };

// App.propTypes = {
//   films: PropTypes.arrayOf(filmPropStructure).isRequired,
//   promo: PropTypes.shape(filmPropStructure).isRequired,
// };

// const mapStateToProps = (state) => ({
//   films: selectsFilms(state),
//   promo: selectsPromo(state),
// });

// export {App};
// export default connect(mapStateToProps)(App);

// -----------------------------------------------------------------

import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {selectsFilms, selectsPromo} from "../../store/reducers/app-state/selectors";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyFilmsList from "../my-films-list/my-films-list";
import AddReview from "../add-review/add-review";
import TabAssembler from "../tab-assembler/tab-assembler";
import Player from "../player/player";
import withPlayer from "../../hocs/with-player/with-player";

import {filmPropStructure} from "../../utils/validator.prop";

// isFavoriteType: CHECKED/UNCHECKED
// getMatchingFilm: находит в списке фильмов (props.films) сответствие в (match.params.id) и возвращает один найденный объект
// filterFavoriteFilms: фильтрует список фильмов (props.films) по соответствию true/false (isFavoriteType) и возвращает массив объектов
import {isFavoriteType, JumpTo} from "../../utils/constants";
import {getMatchingFilm, filterFavoriteFilms} from "../../utils/utils";

const PlayerWrapped = withPlayer(Player);

const App = ({films, promo}) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          // path="/"
          path={JumpTo.MAIN}
          render={({history}) => (
            <Main
              promo={promo}
              handleButtonPlayClick={(id) => history.push(JumpTo.PLAYER + id)}
            />
          )}
        >
        </Route>
        {/* <Route exact path="/login" component={SignIn} /> */}
        {/* <Route exact path="/mylist"></Route> */}
        <Route exact path={JumpTo.LOGIN} component={SignIn} />
        <Route exact path={JumpTo.MYLIST}>
          <MyFilmsList
            films={filterFavoriteFilms(films, isFavoriteType.CHECKED)}
          />
        </Route>
        <Route
          exact
          // path="/films/:id"
          path={JumpTo.FILMS_ID_URL}
          render={({match, history}) => (
            <TabAssembler
              id={Number(match.params.id)}
              films={films}
              handleButtonPlayClick={(id) => history.push(JumpTo.PLAYER + id)}
            />
          )}
        />
        <Route
          exact
          // path="/films/:id/review"
          path={JumpTo.REVIEW_ID_URL}
          render={({match}) => (
            <AddReview film={getMatchingFilm(films, match)} />
          )}
        />
        <Route
          exact
          // path="/player/:id"
          path={JumpTo.PLAYER_ID_URL}
          render={({match, history}) => (
            <PlayerWrapped
              film={getMatchingFilm(films, match)}
              handlePlayerExitClick={() => history.goBack()}
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
