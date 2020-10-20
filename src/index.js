import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./store/reducer";

import App from './components/app/app';
import {mockFilms} from "./mocks/film";
import {generateReviews} from "./mocks/review";

const films = mockFilms;
const reviews = generateReviews(films, 150);

// В хранилище первым аргументом передаём функцию (reducer), которая знает, как его обновлять
// вторым аргументом подключаем возможность работы в redux devTools
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        poster={films[0]}
        films={films}
        reviews={reviews}
      />
    </Provider>,

    document.querySelector(`#root`)
);
