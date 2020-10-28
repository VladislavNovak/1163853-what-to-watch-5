import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {rootReducer} from "./store/reducers/root-reducer";

import App from './components/app/app';
import {mockFilms} from "./mocks/film";
import {generateReviews} from "./mocks/review";

const films = mockFilms;
const reviews = generateReviews(films, 150);

// В хранилище первым аргументом передаём функцию (rootReducer), которая знает, как его обновлять
// вторым аргументом подключаем возможность работы в redux devTools
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        films={films}
        reviews={reviews}
      />
    </Provider>,

    document.querySelector(`#root`)
);
