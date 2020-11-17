import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import AddReviewForm from "../add-review-form/add-review-form";
import withRating from "../../hocs/with-rating/with-rating";

import {filmPropStructure} from "../../utils/validator.prop";
import {IsLink, JumpTo} from "../../utils/constants";
import Logo from "../logo/logo";
import {UserBlock} from "../user-block/user-block";

const AddReviewFormWrapped = withRating(AddReviewForm);

const AddReview = ({film}) => {
  const {posterBig, title, id, poster} = film;
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={posterBig} alt={title}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo path={JumpTo.ROOT} />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={JumpTo.FILMS + id} className="breadcrumbs__link">{title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock isLink={IsLink.YES} />
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={poster} alt={`${title} poster`} width="218" height="327" />
        </div>
      </div>

      {<AddReviewFormWrapped filmId={id}/>}
    </section>
  );
};

AddReview.propTypes = {
  film: PropTypes.shape(filmPropStructure).isRequired,
};

export default AddReview;
