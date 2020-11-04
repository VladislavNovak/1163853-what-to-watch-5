import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import Preview from "../preview/preview";
import {JumpTo} from "../../utils/constants";

const Film = ({
  isActiveFilm,
  id,
  posterBig,
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
          <Preview trailer={trailer} posterBig={posterBig} />
        ) : (
          <img src={posterBig} alt={title} width="280" height="175" />
        )}
      </div>
      <h3 className="small-movie-card__title">
        <Link to={JumpTo.FILMS + id} className="small-movie-card__link">
          {title}
        </Link>
      </h3>
    </article>
  );
};

Film.propTypes = {
  id: PropTypes.number.isRequired,
  isActiveFilm: PropTypes.bool.isRequired,
  posterBig: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  trailer: PropTypes.string.isRequired,
  handleMouseOverFilm: PropTypes.func.isRequired,
  handleMouseLeaveFilm: PropTypes.func.isRequired,
};

export default Film;
