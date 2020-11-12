import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import AddReviewForm from "../add-review-form/add-review-form";
import withRating from "../../hocs/with-rating/with-rating";

import {filmPropStructure} from "../../utils/validator.prop";
import {JumpTo} from "../../utils/constants";
import Logo from "../logo/logo";

const AddReviewFormWrapped = withRating(AddReviewForm);

const AddReview = ({film}) => {
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={film.posterBig} alt={film.title}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo path={JumpTo.ROOT} />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={JumpTo.FILMS + film.id} className="breadcrumbs__link">{film.title}</Link>
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

      {<AddReviewFormWrapped />}
    </section>
  );
};

AddReview.propTypes = {
  film: PropTypes.shape(filmPropStructure).isRequired,
};

export default AddReview;
