import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./store/reducers";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {ActionCreator} from "./store/action";
import {fetchFilms, checkAuth} from "./store/api-action";
import {AuthorizationStatus} from "./utils/utils";
import App from './components/app/app';
import {mockFilms} from "./mocks/film";
import {generateReviews} from "./mocks/review";

const films = mockFilms;
const reviews = generateReviews(films, 150);

const api = createAPI(
  () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

// В хранилище первым аргументом передаём функцию (rootReducer), которая знает, как его обновлять
// вторым аргументом подключаем возможность работы в redux devTools
const store = createStore(
    rootReducer,
    applyMiddleware(thunk.withExtraArgument(api))
);

store.dispatch(fetchFilms());
store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App
        reviews={reviews}
      />
    </Provider>,

    document.querySelector(`#root`)
);
