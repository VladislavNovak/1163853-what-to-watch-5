import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import Film from "./mocks/review";
import {generateInstances} from "./utils/utils";

const poster = {
  posterName: `The Grand Budapest Hotel`,
  posterGenre: `Drama`,
  posterDate: `2014`
};

const films = generateInstances(Film, 8);

ReactDOM.render(
    <App
      poster={poster}
      films={films}
    />,
    document.querySelector(`#root`)
);
