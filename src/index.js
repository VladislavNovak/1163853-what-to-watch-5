import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {generateFilms} from "./mocks/film";
import {generateReviews} from "./mocks/review";
import Genre from "./utils/genre";

const poster = generateFilms(1)[0];
const films = generateFilms(20);
const reviews = generateReviews(films, 40);
// console.log(reviews)

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
