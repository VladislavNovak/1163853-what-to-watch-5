import React from "react";

const ButtonAddToMylist = () => {
  const temp = true;

  return (
    <button className="btn btn--list movie-card__button" type="button">
      {temp
        ? (
          <svg viewBox="0 0 18 14" width="18" height="14">
            <use xlinkHref="#in-list" />
          </svg>
        )
        : (
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add" />
          </svg>
        )
      }
      <span>My list</span>
    </button>

  );
};

export default ButtonAddToMylist;

