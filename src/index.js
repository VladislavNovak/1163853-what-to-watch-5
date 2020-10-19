import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {mockFilms, mockPoster} from "./mocks/film";
import {generateReviews} from "./mocks/review";
import GenreList from "./utils/genre";

const poster = mockPoster;
const films = mockFilms;
const reviews = generateReviews(films, 150);

const genreList = new GenreList();

ReactDOM.render(
    <App
      poster={poster}
      films={films}
      reviews={reviews}
      genreList={genreList}
    />,
    document.querySelector(`#root`)
);
