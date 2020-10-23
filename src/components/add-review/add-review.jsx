import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import AddReviewForm from "../add-review-form/add-review-form";
import withChangingValues from "../../hocs/with-changing-values/with-changing-values";

import {filmPropStructure} from "../../utils/validator.prop";

const AddReviewFormWrapper = withChangingValues(AddReviewForm);

const AddReview = ({film}) => {
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={film.posterBig} alt={film.title}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${film.id}`} className="breadcrumbs__link">{film.title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img
                src="img/avatar.jpg"
                alt="User avatar"
                width="63"
                height="63"
              />
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={film.poster} alt={`${film.title} poster`} width="218" height="327" />
        </div>
      </div>

      {<AddReviewFormWrapper />}
    </section>
  );
};

AddReview.propTypes = {
  film: PropTypes.shape(filmPropStructure).isRequired,
};

export default AddReview;
