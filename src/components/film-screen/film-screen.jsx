import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const FilmScreen = ({id, poster, title, onFilmOverHandler, onFilmLeaveHandler}) => {

  return (
    <article
      key={id}
      className="small-movie-card catalog__movies-card"
      onMouseOver={() => onFilmOverHandler(id)}
      onMouseLeave={() => onFilmLeaveHandler()}
    >
      <div className="small-movie-card__image">
        <img src={poster} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link to={`/films/${id}`} className="small-movie-card__link">
          {title}
        </Link>
      </h3>
    </article>
  );
};

FilmScreen.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onFilmOverHandler: PropTypes.func.isRequired,
  onFilmLeaveHandler: PropTypes.func.isRequired,
};

export default FilmScreen;
