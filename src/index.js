import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./store/reducer";

import App from './components/app/app';
import {mockFilms, mockPoster} from "./mocks/film";
import {generateReviews} from "./mocks/review";

const poster = mockPoster;
const films = mockFilms;
const reviews = generateReviews(films, 150);

// В хранилище передаём функцию (reducer), которая знает, как его обновлять
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App
        poster={poster}
        films={films}
        reviews={reviews}
      />
    </Provider>,
    document.querySelector(`#root`)
);
