import React from "react";
import PropTypes from "prop-types";

const CardScreen = (props) => {
  const {id, poster, title, onMouseOverHandler, onMouseLeaveHandler} = props;

  return (
    <article className="small-movie-card catalog__movies-card" onMouseOver={() => onMouseOverHandler(id)} onMouseLeave={() =>onMouseLeaveHandler(id)}>
      <div className="small-movie-card__image">
        <img
          src={poster}
          alt={title}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">
          {title}
        </a>
      </h3>
    </article>
  );
};

CardScreen.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onMouseOverHandler: PropTypes.func.isRequired,
  onMouseLeaveHandler: PropTypes.func.isRequired,
};

export default CardScreen;
