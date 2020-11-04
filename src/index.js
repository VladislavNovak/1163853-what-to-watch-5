import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./store/reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {ActionCreator} from "./store/action";
import {fetchFilms, fetchPromo} from "./store/api-action";
// import {checkAuth} from "./store/api-action";
import {AuthorizationStatus} from "./utils/constants";
import App from "./components/app/app";

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

// В хранилище первым аргументом передаём функцию (rootReducer), которая знает, как его обновлять
// вторым аргументом подключаем возможность работы в redux devTools
const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

Promise.all([
  store.dispatch(fetchFilms()),
  store.dispatch(fetchPromo()),
  // store.dispatch(checkAuth()),
])
  .then(() => {
    ReactDOM.render(
        <Provider store={store}>
          <App
          />
        </Provider>,

        document.querySelector(`#root`)
    );
  });
