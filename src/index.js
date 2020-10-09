import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import Film from "./mocks/film";
import Review from "./mocks/review";
import Genre from "./utils/genre";
import {generateInstances} from "./utils/utils";

const poster = generateInstances(Film, 1)[0];
const films = generateInstances(Film, 8);
const reviews = generateInstances(Review, 8);
const genre = new Genre();

ReactDOM.render(
    <App
      poster={poster}
      films={films}
      reviews={reviews}
      genre={genre}
    />,
    document.querySelector(`#root`)
);
