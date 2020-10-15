import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import PreviewScreen from "../preview-screen/preview-screen";

const FilmScreen = ({
  isActiveFilm,
  id,
  poster,
  title,
  trailer,
  handleMouseOverFilm,
  handleMouseLeaveFilm,
}) => {
  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={() => handleMouseOverFilm(id)}
      onMouseLeave={handleMouseLeaveFilm}
    >
      <div className="small-movie-card__image">
        {isActiveFilm ? (
          <PreviewScreen trailer={trailer} poster={poster} />
        ) : (
          <img src={poster} alt={title} width="280" height="175" />
        )}
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
  isActiveFilm: PropTypes.bool.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  trailer: PropTypes.string.isRequired,
  handleMouseOverFilm: PropTypes.func.isRequired,
  handleMouseLeaveFilm: PropTypes.func.isRequired,
};

export default FilmScreen;
