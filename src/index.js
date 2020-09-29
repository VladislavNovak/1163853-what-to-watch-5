import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const poster = {
  posterName: `The Grand Budapest Hotel`,
  posterGenre: `Drama`,
  posterDate: `2014`
};

ReactDOM.render(
    <App
      poster={poster}
    />,
    document.querySelector(`#root`)
);
